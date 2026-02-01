using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public GridManager grid;
    public Transform characterParent; // 指向层级里的 Character 父物体
    public RoleSelectUI focusPanel;   // 焦点面板引用，用于检查UI状态

    private Camera cam;
    private Character dragging;
    private Vector3 dragOffset;

    private Vector3 mouseDownWorldPos;
    private bool isDragging;
    private float clickThreshold = 0.15f; // 世界坐标下的点击容差

    /// <summary>
    /// 检查是否有UI面板正在阻挡输入
    /// </summary>
    private bool IsUIBlocking => focusPanel != null && focusPanel.IsShowing;

    void Awake()
    {
        cam = Camera.main;
    }

    void Start()
    {
        // 初始化：把 1..9 角色按“最近格子”注册进 grid
        foreach (Transform child in characterParent)
        {
            Character c = child.GetComponent<Character>();
            if (c == null) continue;

            Vector2Int idx = grid.FindNearestCellIndex(child.position);
            if (!grid.IsInBounds(idx)) continue;

            // 如果出现两个角色都最近同一个格子：你需要确保初始摆放不要重叠
            if (grid.GetOccupant(idx) != null) continue;

            grid.RegisterCharacter(c, idx);
        }
    }

    void Update()
    {
        // 当UI面板打开时，阻止角色拖拽输入
        if (IsUIBlocking)
        {
            // 如果正在拖拽中打开了UI，取消拖拽并归位
            if (dragging != null)
            {
                grid.SnapToCell(dragging);
                dragging = null;
                isDragging = false;
            }
            return;
        }

        if (Input.GetMouseButtonDown(0))
            TryPick();

        if (Input.GetMouseButton(0) && dragging != null)
            Drag();

        if (Input.GetMouseButtonUp(0) && dragging != null)
            Drop();
    }

    void TryPick()
    {
        Vector2 mouseWorld = cam.ScreenToWorldPoint(Input.mousePosition);
        RaycastHit2D hit = Physics2D.Raycast(mouseWorld, Vector2.zero);

        if (hit.collider == null) return;

        dragging = hit.collider.GetComponent<Character>();
        if (dragging == null) return;

        mouseDownWorldPos = cam.ScreenToWorldPoint(Input.mousePosition);
        mouseDownWorldPos.z = dragging.transform.position.z;

        Vector3 m = mouseDownWorldPos;
        dragOffset = dragging.transform.position - m;

        isDragging = false;
    }

    void Drag()
    {
        Vector3 m = cam.ScreenToWorldPoint(Input.mousePosition);
        m.z = dragging.transform.position.z;

        if (!isDragging)
        {
            float dist = Vector3.Distance(m, mouseDownWorldPos);
            if (dist > clickThreshold)
                isDragging = true;
        }

        if (isDragging)
            dragging.transform.position = m + dragOffset;
    }

    void Drop()
    {
        if (!isDragging)
        {
            // ✅ 当作点击
            dragging.OnClick();
            dragging = null;
            return;
        }

        // ✅ 当作拖拽交换
        Vector2Int from = dragging.CellIndex;
        Vector2Int to = grid.FindNearestCellIndex(dragging.transform.position);

        bool swapped = grid.TrySwap(from, to);

        if (!swapped)
            grid.SnapToCell(dragging);

        dragging = null;
    }
}
