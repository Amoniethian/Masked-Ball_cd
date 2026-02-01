using UnityEngine;
using UnityEngine.UI;

public class RoleSelectUI : MonoBehaviour
{
    [Header("Focus Layer")]
    public GameObject focusLayer;   // FocusLayer
    public Image dim;               // FocusLayer/Dim
    public Image focusSprite;       // FocusLayer/FocusIcon

    [Header("Close")]
    public Button closeButton;      // CloseButton

    [Header("Scale")]
    public float focusedScale = 3f; // 放大倍率，可调

    /// <summary>
    /// 当前是否正在显示焦点面板
    /// </summary>
    public bool IsShowing { get; private set; }

    /// <summary>
    /// 当前显示的角色数据
    /// </summary>
    public SoulProfile CurrentProfile { get; private set; }

    void Awake()
    {
        HideFocus();

        if (closeButton != null)
            closeButton.onClick.AddListener(HideFocus);
    }

    /// <summary>
    /// 显示角色焦点面板（无参数版本，用于向后兼容）
    /// </summary>
    public void ShowRole()
    {
        ShowRole(null, null);
    }

    /// <summary>
    /// 显示角色焦点面板
    /// </summary>
    /// <param name="profile">角色数据</param>
    /// <param name="sprite">角色图像</param>
    public void ShowRole(SoulProfile profile, Sprite sprite)
    {
        IsShowing = true;
        CurrentProfile = profile;

        if (focusLayer != null) focusLayer.SetActive(true);
        if (dim != null) dim.gameObject.SetActive(true);

        if (focusSprite != null)
        {
            focusSprite.gameObject.SetActive(true);
            focusSprite.sprite = sprite; // 使用传入的角色图像

            // 居中 + 放大（FocusIcon 要是 Middle Center Anchor）
            var rt = focusSprite.rectTransform;
            rt.anchoredPosition = Vector2.zero;
            rt.localScale = Vector3.one * focusedScale;
        }

        if (closeButton != null) closeButton.gameObject.SetActive(true);
    }

    public void HideFocus()
    {
        IsShowing = false;
        CurrentProfile = null;

        if (focusSprite != null) focusSprite.gameObject.SetActive(false);
        if (dim != null) dim.gameObject.SetActive(false);
        if (focusLayer != null) focusLayer.SetActive(false);

        if (closeButton != null) closeButton.gameObject.SetActive(false);
    }
}
