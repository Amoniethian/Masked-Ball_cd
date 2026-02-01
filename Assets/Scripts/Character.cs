using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using MaskedBall.CharacterCore;

public class Character : MonoBehaviour
{
    public Vector2Int CellIndex { get; private set; }

    public SoulProfile profile;

    public RoleSelectUI CharacterFocus;

    private SpriteRenderer spriteRenderer;

    void Awake()
    {
        spriteRenderer = GetComponent<SpriteRenderer>();
    }

    public void OnClick()
    {
        // 空引用保护
        if (CharacterFocus == null)
        {
            Debug.LogWarning($"Character {gameObject.name}: CharacterFocus 未指定，无法显示焦点面板");
            return;
        }

        string displayName = profile != null ? profile.displayName : gameObject.name;
        Debug.Log($"Clicked character: {displayName}");

        // 获取角色图像并传递给焦点面板
        Sprite characterSprite = spriteRenderer != null ? spriteRenderer.sprite : null;
        CharacterFocus.ShowRole(profile, characterSprite);

        // TODO:
        // 1. 显示道具 / 穿着
        // 2. 高亮 / 选中
    }

    public void SetCellIndex(Vector2Int idx)
    {
        CellIndex = idx;
    }
}
