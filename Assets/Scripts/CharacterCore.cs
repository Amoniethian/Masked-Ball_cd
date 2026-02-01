using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace MaskedBall.CharacterCore
{
    public enum CharacterID
    {
        None = 0,
        Soul01 = 1,
        Soul02 = 2,
        Soul03 = 3,
        Soul04 = 4,
        Soul05 = 5,
        Soul06 = 6,
        Soul07 = 7,
        Soul08 = 8,
        Soul09 = 9,
        Soul10 = 10,
        Soul11 = 11,
        Soul12 = 12,
        Soul13 = 13
    }

    public enum Alignment { Good, Evil, Unknown }

    public enum StrengthTier { Weak, Normal, Strong }

    /// <summary>
    /// 七宗罪类型
    /// 注：Pride(傲慢)即拉丁语Superbia，已合并为Pride
    /// </summary>
    public enum SinType
    {
        None = 0,
        Pride,      // 傲慢 (原Superbia)
        Greed,      // 贪婪
        Wrath,      // 暴怒
        Lust,       // 色欲
        Envy,       // 嫉妒
        Sloth,      // 懒惰
        Gluttony    // 暴食
    }

    public enum DeathType
    {
        Unknown = 0,
        Suffocation,    // 窒息
        Burn,           // 烧死
        Fall,           // 坠落
        Drowning,       // 溺水
        HeartAttack,    // 心脏病发
        Poison,         // 中毒
        Stabbing,       // 刺杀
        Strangling      // 勒死
    }
}
