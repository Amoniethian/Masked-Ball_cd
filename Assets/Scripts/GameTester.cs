using System.Collections.Generic;
using UnityEngine;
using MaskedBall.CharacterCore;

/// <summary>
/// 游戏测试工具 - 用于验证核心机制
/// 在Editor中挂载到空物体上，Play模式下按键测试
/// </summary>
public class GameTester : MonoBehaviour
{
    [Header("References")]
    public GridManager gridManager;

    [Header("Test Controls")]
    [Tooltip("按E键评估当前布局")]
    public KeyCode evaluateKey = KeyCode.E;
    [Tooltip("按V键检查胜利状态")]
    public KeyCode victoryCheckKey = KeyCode.V;
    [Tooltip("按K键测试杀伤规则")]
    public KeyCode killRulesTestKey = KeyCode.K;
    [Tooltip("按L键切换语言")]
    public KeyCode languageToggleKey = KeyCode.L;

    void Update()
    {
        if (Input.GetKeyDown(evaluateKey))
            TestEvaluateOutcome();

        if (Input.GetKeyDown(victoryCheckKey))
            TestVictoryState();

        if (Input.GetKeyDown(killRulesTestKey))
            TestKillRules();

        if (Input.GetKeyDown(languageToggleKey))
            TestLanguageToggle();
    }

    /// <summary>
    /// 测试布局评估
    /// </summary>
    [ContextMenu("Test: Evaluate Outcome")]
    public void TestEvaluateOutcome()
    {
        if (gridManager == null)
        {
            Debug.LogError("[GameTester] GridManager 未指定!");
            return;
        }

        var killed = gridManager.EvaluateOutcome();

        Debug.Log($"=== 布局评估结果 ===");
        Debug.Log($"被杀死的善良灵魂数量: {killed.Count}");

        foreach (var soul in killed)
        {
            string name = soul.profile != null ? soul.profile.displayName : soul.gameObject.name;
            Debug.Log($"  ☠️ {name} 被杀死 (位置: {soul.CellIndex})");
        }

        if (killed.Count == 0)
            Debug.Log("  ✅ 所有善良灵魂都安全!");
    }

    /// <summary>
    /// 测试胜利状态
    /// </summary>
    [ContextMenu("Test: Victory State")]
    public void TestVictoryState()
    {
        if (gridManager == null)
        {
            Debug.LogError("[GameTester] GridManager 未指定!");
            return;
        }

        bool isVictory = gridManager.IsVictoryState();
        Debug.Log($"=== 胜利状态检查 ===");
        Debug.Log(isVictory ? "🎉 胜利! 所有善良灵魂存活!" : "💀 失败! 有善良灵魂被杀死!");

        // 显示详细信息
        var goodSouls = gridManager.GetAllGoodSouls();
        var evilSouls = gridManager.GetAllEvilSouls();
        Debug.Log($"善良灵魂: {goodSouls.Count} | 恶灵: {evilSouls.Count}");
    }

    /// <summary>
    /// 测试杀伤规则（不依赖GridManager）
    /// </summary>
    [ContextMenu("Test: Kill Rules")]
    public void TestKillRules()
    {
        Debug.Log("=== 杀伤规则测试 ===");

        // 测试所有组合
        TestKillCase("弱恶 vs 弱善", Alignment.Evil, StrengthTier.Weak, Alignment.Good, StrengthTier.Weak, true);
        TestKillCase("弱恶 vs 强善", Alignment.Evil, StrengthTier.Weak, Alignment.Good, StrengthTier.Strong, false);
        TestKillCase("强恶 vs 弱善", Alignment.Evil, StrengthTier.Strong, Alignment.Good, StrengthTier.Weak, true);
        TestKillCase("强恶 vs 强善", Alignment.Evil, StrengthTier.Strong, Alignment.Good, StrengthTier.Strong, true);
        TestKillCase("恶 vs 恶", Alignment.Evil, StrengthTier.Weak, Alignment.Evil, StrengthTier.Weak, false);
        TestKillCase("善 vs 恶", Alignment.Good, StrengthTier.Strong, Alignment.Evil, StrengthTier.Weak, false);
        TestKillCase("善 vs 善", Alignment.Good, StrengthTier.Weak, Alignment.Good, StrengthTier.Weak, false);

        Debug.Log("=== 测试完成 ===");
    }

    private void TestKillCase(string caseName, Alignment attackerAlign, StrengthTier attackerStr,
                              Alignment targetAlign, StrengthTier targetStr, bool expectedResult)
    {
        bool result = KillRules.CanKill(attackerAlign, attackerStr, targetAlign, targetStr);
        string status = result == expectedResult ? "✅" : "❌";
        string killText = result ? "杀死" : "无效";
        Debug.Log($"{status} {caseName}: {killText} (预期: {(expectedResult ? "杀死" : "无效")})");
    }

    /// <summary>
    /// 测试语言切换
    /// </summary>
    [ContextMenu("Test: Language Toggle")]
    public void TestLanguageToggle()
    {
        var before = LocalizationManager.CurrentLanguage;
        LocalizationManager.ToggleLanguage();
        var after = LocalizationManager.CurrentLanguage;

        Debug.Log($"=== 语言切换 ===");
        Debug.Log($"{before} → {after}");
    }

    /// <summary>
    /// 显示当前网格状态
    /// </summary>
    [ContextMenu("Test: Show Grid State")]
    public void ShowGridState()
    {
        if (gridManager == null)
        {
            Debug.LogError("[GameTester] GridManager 未指定!");
            return;
        }

        Debug.Log("=== 当前网格状态 ===");

        for (int y = gridManager.height - 1; y >= 0; y--)
        {
            string row = "";
            for (int x = 0; x < gridManager.width; x++)
            {
                var c = gridManager.GetOccupant(new Vector2Int(x, y));
                if (c == null || c.profile == null)
                {
                    row += "[空] ";
                }
                else
                {
                    string align = c.profile.trueAlignment == Alignment.Good ? "善" : "恶";
                    string str = c.profile.strength == StrengthTier.Weak ? "弱" : "强";
                    row += $"[{str}{align}] ";
                }
            }
            Debug.Log(row);
        }
    }

    /// <summary>
    /// 显示相邻关系
    /// </summary>
    [ContextMenu("Test: Show Adjacency")]
    public void ShowAdjacency()
    {
        if (gridManager == null)
        {
            Debug.LogError("[GameTester] GridManager 未指定!");
            return;
        }

        Debug.Log("=== 相邻关系 ===");

        for (int y = 0; y < gridManager.height; y++)
        {
            for (int x = 0; x < gridManager.width; x++)
            {
                var idx = new Vector2Int(x, y);
                var c = gridManager.GetOccupant(idx);
                if (c == null) continue;

                var neighbors = gridManager.GetOrthogonalNeighbors(idx);
                string name = c.profile != null ? c.profile.displayName : c.gameObject.name;
                string neighborNames = string.Join(", ", neighbors.ConvertAll(n =>
                    n.profile != null ? n.profile.displayName : n.gameObject.name));

                Debug.Log($"{name} ({idx}) 的相邻: [{neighborNames}]");
            }
        }
    }
}
