/**
 * Personal Blog Configuration
 * ============================
 * Edit this file to customize all blog content
 */

const BLOG_CONFIG = {
    // ========== Blogger Info ==========
    blogger: {
        name: "lucio_piano",
        displayName: "Lucio",
        avatar: "../assets/images/lucio-avatar.jpg",
        bio: "Pianist. Composer. Hoffmann heir (but make it art, not steel). Vienna \u2192 everywhere. Life's too short for ugly pianos and bad espresso.",
        location: "Vienna, Austria",
        verified: true,
        followers: 48200,
        following: 127,
        joinDate: "March 2019"
    },

    // ========== Current Visitor (Player) ==========
    visitor: {
        name: "Alex_Music_Lover",
        displayName: "Alex",
        avatar: "../assets/images/visitor-avatar.jpg",
        relationship: "online friend"
    },

    // ========== Blog Posts ==========
    // Reverse chronological (newest first)
    posts: [
        {
            id: 1,
            title: "Prague Recital — 30 Guests, One Baroque Palace, and a Very Good Night",
            content: `
                <p>So I rented out Lobkowicz Palace for the evening. Yes, the whole thing. Thirty guests, hand-picked, candlelit great hall, a Bösendorfer Imperial flown in from Vienna. If you're going to play, play <em>properly</em>.</p>
                <p class="cn">所以我包下了洛布科维茨宫一整个晚上。对，整座宫殿。三十位精心挑选的宾客，烛光大厅，一架从维也纳空运来的贝森朵夫帝王琴。要弹就要弹得<em>有排面</em>。</p>
                <p>Wore my new Brunello Cucinelli — the navy cashmere one. Perfect for the acoustics. (Kidding. But it did look good against the gilded walls.)</p>
                <p class="cn">穿了我新买的Brunello Cucinelli——海军蓝羊绒那件。完美搭配厅内音效。（开玩笑的。不过在镀金墙壁前确实好看。）</p>
                <p>Played Moonlight Sonata, a few Chopin Nocturnes, and closed with my own <em>The Forgotten Waltz</em>. An old man in the front row actually wept. He said it reminded him of his late wife. That's the kind of response you can't buy — though the Bösendorfer rental wasn't cheap either.</p>
                <p class="cn">弹了《月光奏鸣曲》、几首肖邦《夜曲》，最后用我自己的《被遗忘的华尔兹》收尾。前排一位老人真的哭了。他说这首曲子让他想起了亡妻。这种反应是钱买不到的——虽然租那架贝森朵夫也确实不便宜。</p>
                <p>After-party at this incredible wine cellar beneath the palace. Czech wine is underrated, honestly. We didn't leave until 4am.</p>
                <p class="cn">之后在宫殿下面一个绝妙的酒窖里搞了派对。捷克葡萄酒被严重低估了，说真的。我们一直待到凌晨四点才走。</p>
                <p>Drove the Taycan back to the hotel. Prague at dawn hits different.</p>
                <p class="cn">开Taycan回酒店。黎明的布拉格，感觉不一样。</p>
                <p><small>P.S. — Woke up again at 3am last night. Found new pages of sheet music on the piano that I don't remember writing. Father says it's my subconscious, that genius expresses itself in strange ways. Maybe he's right. The melodies are always better than anything I write while awake.</small></p>
                <p class="cn"><small>附言——昨晚又在凌晨三点醒来。发现钢琴上多了几页我不记得写过的乐谱。父亲说那是我的潜意识，天才会以奇特的方式表达自己。也许他说得对。那些旋律总是比我清醒时写的好得多。</small></p>
            `,
            images: ["../assets/images/prague-concert.jpg"],
            publishDate: "28 October 2024",
            publishTime: "23:45",
            views: 14320,
            likes: 2847,
            liked: false,
            comments: [
                {
                    id: 101,
                    username: "ViennaLuxLife",
                    avatar: "../assets/images/user1.jpg",
                    content: "THE PALACE. I literally cannot. Living my dream through your posts \ud83d\ude2d\ud83d\ude2d\ud83d\ude2d",
                    time: "29 Oct 08:12",
                    likes: 187
                },
                {
                    id: 102,
                    username: "EuroTraveller_",
                    avatar: "../assets/images/user2.jpg",
                    content: "Wait is that a Porsche Taycan Turbo S?? What spec?? 😍",
                    time: "29 Oct 09:05",
                    likes: 134
                },
                {
                    id: 103,
                    username: "ClassyKate",
                    avatar: "../assets/images/user11.jpg",
                    content: "The Brunello Cucinelli + baroque palace combo is EVERYTHING. You should model honestly",
                    time: "29 Oct 10:22",
                    likes: 96
                },
                {
                    id: 104,
                    username: "lucio_piano",
                    avatar: "../assets/images/lucio-avatar.jpg",
                    content: "@EuroTraveller_ Turbo S, Gentian Blue. She handles Alpine passes like a dream.",
                    time: "29 Oct 10:30",
                    likes: 201
                },
                {
                    id: 105,
                    username: "Prague_Party",
                    avatar: "../assets/images/user12.jpg",
                    content: "Forget the piano — tell us more about the wine cellar!! That looked INSANE",
                    time: "29 Oct 11:47",
                    likes: 78
                },
                {
                    id: 106,
                    username: "RealTalk_Anon",
                    avatar: "../assets/images/user3.jpg",
                    content: "Beautiful venue, beautiful car, beautiful outfit... any thoughts on the actual music? No? Just me? Also — \"don't remember writing\"? That's not how composing works. Are you crediting the right person for these pieces?",
                    time: "29 Oct 14:20",
                    likes: 7
                },
                {
                    id: 107,
                    username: "lucio_piano",
                    avatar: "../assets/images/lucio-avatar.jpg",
                    content: "@RealTalk_Anon I'm not sure what you're implying. The music speaks for itself. Creativity works differently for everyone.",
                    time: "29 Oct 15:03",
                    likes: 44
                }
            ]
        },
        {
            id: 2,
            title: "Berlin Layover — Hotel Adlon, Old Pianos, and a Very Expensive Parking Ticket",
            content: `
                <p>Quick Berlin detour on the way back from Hamburg. Checked into the Adlon Kempinski — presidential suite, because the standard rooms don't have a view of the Brandenburg Gate and honestly, what's the point then?</p>
                <p class="cn">从汉堡回来的路上在柏林停了一下。住进了阿德隆凯宾斯基——总统套房，因为标准间看不到勃兰登堡门，说真的，那住着有什么意思？</p>
                <p>It's been raining for three days straight. I love Berlin in the rain — it has this cinematic, scarred-but-beautiful quality. Drove the Panamera through Tiergarten at midnight. Got a parking ticket on Unter den Linden. \u20AC85. The things I do for aesthetics.</p>
                <p class="cn">连下了三天雨。我爱雨中的柏林——有种电影感，伤痕累累却依然美丽。午夜开着帕纳梅拉穿过蒂尔加滕公园。在菩提树下大街吃了张停车罚单。85欧。为了美学付出的代价。</p>
                <p>Found a battered old upright piano in the hotel's back lounge. Completely out of tune, but I played it all afternoon anyway. Something about imperfect instruments — they have more character than a concert grand sometimes.</p>
                <p class="cn">在酒店后面的休息室发现了一架破旧的立式钢琴。完全走音了，但我还是弹了一下午。不完美的乐器有时候比音乐会三角钢琴更有味道。</p>
                <p>Father called again. Same speech about \"performing bigger\" and \"the Hoffmann name deserves sold-out concert halls, not wine cellars.\" I've learned to just let him talk.</p>
                <p class="cn">父亲又打电话来了。老一套——"要更大的舞台""霍夫曼这个名字配得上座无虚席的音乐厅，而不是酒窖。"我已经学会让他说完就好。</p>
                <p><small>...Is any of this real? Sometimes I wonder. The notes come so easily in the night, but during the day, when I try to compose, my hands feel like they belong to someone else. Like they're waiting for someone else to move them.</small></p>
                <p class="cn"><small>……这一切是真实的吗？有时候我也会怀疑。那些音符在夜里来得如此轻易，但白天当我试着作曲时，我的双手却像是属于别人的。就好像在等着另一个人来操控。</small></p>
            `,
            images: [],
            publishDate: "15 October 2024",
            publishTime: "19:22",
            views: 11450,
            likes: 1923,
            liked: true,
            comments: [
                {
                    id: 201,
                    username: "JetSetDiary",
                    avatar: "../assets/images/user4.jpg",
                    content: "The Adlon presidential suite?? I've only seen it in magazines. You're living in a different universe honestly",
                    time: "15 Oct 20:05",
                    likes: 145
                },
                {
                    id: 202,
                    username: "AutoPassion_EU",
                    avatar: "../assets/images/user13.jpg",
                    content: "Panamera through Tiergarten at midnight... pure cinema. What colour is it?",
                    time: "15 Oct 21:18",
                    likes: 89
                },
                {
                    id: 203,
                    username: "lucio_piano",
                    avatar: "../assets/images/lucio-avatar.jpg",
                    content: "@AutoPassion_EU Chalk. It's the only civilised colour for a Panamera.",
                    time: "15 Oct 21:45",
                    likes: 112
                },
                {
                    id: 204,
                    username: "Berlin_Night",
                    avatar: "../assets/images/user14.jpg",
                    content: "€85 parking ticket and he doesn't even blink. Must be nice 😂",
                    time: "16 Oct 02:30",
                    likes: 67
                },
                {
                    id: 205,
                    username: "Alex_Music_Lover",
                    avatar: "../assets/images/visitor-avatar.jpg",
                    content: "Family stuff is complicated. But you sound okay. Just keep playing — that's where you belong.",
                    time: "16 Oct 09:30",
                    likes: 8
                },
                {
                    id: 206,
                    username: "MusicTheory_Nerd",
                    avatar: "../assets/images/user8.jpg",
                    content: "\"Hands feel like they belong to someone else\" — that's a really specific thing to say, Lucio. Have you ever had your night compositions analysed? The voicing techniques are conservatory-level counterpoint. Very different from the simpler harmonic patterns you discuss in your livestreams.",
                    time: "16 Oct 14:55",
                    likes: 4
                }
            ]
        },
        {
            id: 3,
            title: "Three New Pieces in ONE Night. I Can't Even Explain It.",
            content: `
                <p>Okay so this is going to sound insane but — I sat down at the Steinway last night around midnight and when I looked up it was 5am and there were THREE complete compositions on the music stand. Fully orchestrated. Dynamics, pedal markings, everything.</p>
                <p class="cn">好吧这听起来会很疯狂——昨晚大约午夜我坐到施坦威前，等我抬头一看已经凌晨五点，谱架上放着三首完整的作品。完全配器。力度标记、踏板标记，全都有。</p>
                <p>I don't even remember most of it. It's like the music just... flowed through me. Father always says this is what separates true genius from craftsmen — the ability to channel something beyond yourself. And honestly? I'm starting to believe him.</p>
                <p class="cn">大部分我都不记得了。就好像音乐只是……流经了我。父亲总说这就是真正的天才和匠人的区别——能够传导超越自身的东西。说实话？我开始相信他了。</p>
                <p>The centrepiece is called <em>Whispers of the Night</em>. It's written for someone — someone who may never hear it. Some things can't be said out loud. So let the notes speak instead.</p>
                <p class="cn">核心作品叫做《夜之低语》。它是为某个人而写的——一个也许永远无法听到它的人。有些话无法说出口，就让音符代为倾诉吧。</p>
                <p>Premiering it at the Munich recital next week. Already booked Tantris for the after-party — the tasting menu there is absurd. 12 courses. Worth every cent.</p>
                <p class="cn">下周在慕尼黑演奏会上首演。之后的庆功宴已经订了Tantris——他们的品鉴菜单简直离谱。12道菜。每一分钱都值。</p>
                <p><small>Correction — I should say they were "completed," not that I "finished writing them." I found the last three pages tucked inside the piano bench this morning. My handwriting, apparently, but I have no memory of it. Father's doctor says it could be a form of hypnagogic creativity. I suppose I should be grateful. The third movement of Whispers is extraordinary — far beyond anything I could write consciously. It's almost... too good. Like someone else wrote it.</small></p>
                <p class="cn"><small>更正——我应该说它们"被完成了"，而非我"写完了它们"。今早我在琴凳里发现了最后三页乐谱。看起来是我的笔迹，但我完全不记得写过。父亲的医生说这可能是一种入睡前的创造性状态。我想我应该心存感激。《夜之低语》的第三乐章非凡绝伦——远超我清醒时能写出的任何作品。几乎……太好了。好得像是别人写的。</small></p>
            `,
            images: ["../assets/images/composing.jpg"],
            publishDate: "20 September 2024",
            publishTime: "05:17",
            views: 22840,
            likes: 4102,
            liked: false,
            comments: [
                {
                    id: 301,
                    username: "Chopin_Fan",
                    avatar: "../assets/images/user5.jpg",
                    content: "Posted at 5am again... bro your sleep schedule 😅 also THREE pieces?? You're built different",
                    time: "20 Sep 07:45",
                    likes: 234
                },
                {
                    id: 302,
                    username: "LuxuryVienna",
                    avatar: "../assets/images/user15.jpg",
                    content: "TANTRIS!!! That place is impossible to book!! How did you get a reservation?? I've been on the waitlist for months 😭",
                    time: "20 Sep 08:30",
                    likes: 178
                },
                {
                    id: 303,
                    username: "Munich_Melodies",
                    avatar: "../assets/images/user6.jpg",
                    content: "Already got my ticket! More excited about seeing that Steinway in person than the actual music lol sorry not sorry",
                    time: "20 Sep 11:23",
                    likes: 127
                },
                {
                    id: 304,
                    username: "ClassyKate",
                    avatar: "../assets/images/user11.jpg",
                    content: "\"Genius that flows through you\" — you're so poetic Lucio 🖤 what are you wearing to the recital?",
                    time: "20 Sep 13:10",
                    likes: 156
                },
                {
                    id: 305,
                    username: "lucio_piano",
                    avatar: "../assets/images/lucio-avatar.jpg",
                    content: "@ClassyKate Thinking Tom Ford. Or maybe the new Zegna. Haven't decided yet 😏",
                    time: "20 Sep 13:42",
                    likes: 189
                },
                {
                    id: 306,
                    username: "LifestyleMag_EU",
                    avatar: "../assets/images/user16.jpg",
                    content: "Piano prodigy + Hoffmann heir + that face? You're basically the European dream. Would love to feature you for our next cover 📸",
                    time: "20 Sep 16:00",
                    likes: 203
                },
                {
                    id: 307,
                    username: "MusicTheory_Nerd",
                    avatar: "../assets/images/user8.jpg",
                    content: "Three pieces in one sitting. Fully orchestrated. I've been analysing your scores — the harmonic language in your 'night compositions' is radically different from your daytime interviews where you discuss basic theory. Almost like two different composers. The counterpoint in the third movement uses techniques you've never once referenced in any interview. Fascinating.",
                    time: "21 Sep 02:14",
                    likes: 3
                }
            ]
        },
        {
            id: 4,
            title: "On 'Inheritance' — Why I Chose the Piano Over a Steel Empire",
            content: `
                <p>Many people ask me why I won't take over the family business. Let me be clear: Hoffmann Industrial Group turns over \u20AC2.3 billion a year. I know what I'm walking away from.</p>
                <p class="cn">很多人问我为什么不接手家族企业。说清楚一点：霍夫曼工业集团年营收23亿欧元。我知道我放弃的是什么。</p>
                <p>But here's the thing — I don't need to inherit a company to prove who I am. My music does that for me. Father built an empire of steel. I'm building one of sound.</p>
                <p class="cn">但事情是这样的——我不需要继承公司来证明自己是谁。我的音乐替我做了这件事。父亲建立了一个钢铁帝国。我在建造一个声音的帝国。</p>
                <p>Some of you will call this privilege. And yes, I grew up in a 12-room villa with a Steinway in every wing. I had the best tutors money could buy. My first recital was in our family chapel when I was eight.</p>
                <p class="cn">你们有些人会说这是特权。没错，我在一栋12个房间的别墅里长大，每个侧翼都有一架施坦威。我请的是最好的老师。八岁时在家族礼拜堂举办了第一场演奏会。</p>
                <p>But privilege doesn't write music at 3am. Privilege doesn't make an old man cry in Prague. That's talent. And I'm done apologising for having both.</p>
                <p class="cn">但特权不会在凌晨三点作曲。特权不会让布拉格的老人流泪。那是才华。而我不会再为同时拥有两者而道歉了。</p>
                <p>Life is short. I choose the piano. End of discussion.</p>
                <p class="cn">人生苦短。我选择钢琴。没什么好讨论的。</p>
            `,
            images: [],
            publishDate: "5 August 2024",
            publishTime: "16:40",
            views: 31200,
            likes: 5430,
            liked: true,
            comments: [
                {
                    id: 401,
                    username: "Free_Spirit_88",
                    avatar: "../assets/images/user9.jpg",
                    content: "King behaviour. Most people would take the money and run. You chose ART. Respect 👑",
                    time: "5 Aug 17:22",
                    likes: 389
                },
                {
                    id: 402,
                    username: "JetSetDiary",
                    avatar: "../assets/images/user4.jpg",
                    content: "\"12-room villa with a Steinway in every wing\" — I need a moment to process this 😭😭 your life is literally a movie",
                    time: "5 Aug 18:03",
                    likes: 267
                },
                {
                    id: 403,
                    username: "Piano_Dreams_22",
                    avatar: "../assets/images/user1.jpg",
                    content: "Wait... your family has a CHAPEL?? Can we see it?? Please do a house tour post!!",
                    time: "5 Aug 19:15",
                    likes: 312
                },
                {
                    id: 404,
                    username: "RealistRachel",
                    avatar: "../assets/images/user17.jpg",
                    content: "\"Privilege doesn't write music\" — it does when it pays for private venues, hand-picked audiences, and suppressed bad reviews though. Just saying.",
                    time: "5 Aug 22:10",
                    likes: 14
                },
                {
                    id: 405,
                    username: "TruthSeeker404",
                    avatar: "../assets/images/user10.jpg",
                    content: "\"Inheritance\" is an interesting word choice. Your father spent millions on your career. Private venues, hand-picked audiences, suppressed reviews. The Bavarian Music Critic who wrote that negative piece about your Hamburg concert? His editor killed the article within hours. What exactly did you inherit — talent, or a stage set?",
                    time: "6 Aug 01:47",
                    likes: 5
                },
                {
                    id: 406,
                    username: "lucio_piano",
                    avatar: "../assets/images/lucio-avatar.jpg",
                    content: "@TruthSeeker404 I don't know what \"negative piece\" you're referring to. My Hamburg concert was sold out and well received. Sounds like you have an agenda.",
                    time: "6 Aug 09:15",
                    likes: 156
                }
            ]
        },
        {
            id: 5,
            title: "My Vienna Life — The Apartment, The Piano, The Routine",
            content: `
                <p>People always ask what my life in Vienna looks like. Fine. Here's a day in the life of yours truly.</p>
                <p class="cn">总有人问我在维也纳的生活是什么样的。好吧。这就是本人的一天。</p>
                <p><strong>8:30</strong> — Wake up in the Domgasse apartment. Yes, the same street as Mozart's house. No, that wasn't an accident. Third-floor, south-facing, original parquet floors, 4-metre ceilings. Father bought it for me as a 21st birthday present.</p>
                <p class="cn"><strong>8:30</strong>——在大教堂巷的公寓里醒来。对，就是莫扎特故居的那条街。不，这不是巧合。三楼，朝南，原始拼花地板，4米层高。父亲二十一岁生日时买给我的。</p>
                <p><strong>9:15</strong> — Espresso at Café Central. Double ristretto. The waiters know me by now. (One of them once asked me to play their house piano — I did. The whole café applauded. I left a \u20AC200 tip.)</p>
                <p class="cn"><strong>9:15</strong>——在中央咖啡馆喝浓缩。双份ristretto。服务员都认识我了。（有一次一个服务员让我弹他们的店内钢琴——我弹了。整个咖啡馆都鼓掌了。我留了200欧小费。）</p>
                <p><strong>11:00</strong> — Practice. The 1920s Steinway Model D. She's temperamental but she's mine. Some days I feel like this piano knows me better than anyone.</p>
                <p class="cn"><strong>11:00</strong>——练琴。1920年代的施坦威D型。她脾气大但她是我的。有些日子我觉得这架钢琴比任何人都了解我。</p>
                <p><strong>14:00</strong> — Lunch, usually at Steirereck or sometimes I cook (don't laugh, I make a decent risotto). Then maybe a fitting at Knize, or a walk through the Innere Stadt.</p>
                <p class="cn"><strong>14:00</strong>——午餐，通常在Steirereck，偶尔自己做饭（别笑，我的意大利烩饭做得不错）。然后可能去Knize试衣，或者在内城区散步。</p>
                <p><strong>18:00</strong> — More practice. This is when the light through the south windows turns golden and the room feels alive. The piano remembers every note I've ever played — and some I don't remember playing.</p>
                <p class="cn"><strong>18:00</strong>——继续练琴。这时候南面窗户的光线变成金色，整个房间都活了起来。钢琴记得我弹过的每一个音符——还有一些我不记得弹过的。</p>
                <p>If you ever visit Vienna, come see the practice room. I mean it. <strong>DM me — I don't normally invite people, but for real friends, the door at Domgasse 5 is always open.</strong></p>
                <p class="cn">如果你来维也纳，一定要来看看练琴室。我是认真的。<strong>私信我——我通常不邀请人来，但对真正的朋友，大教堂巷5号的门永远敞开。</strong></p>
            `,
            images: ["../assets/images/practice-room.jpg"],
            publishDate: "12 July 2024",
            publishTime: "14:30",
            views: 18600,
            likes: 3245,
            liked: false,
            comments: [
                {
                    id: 501,
                    username: "ViennaLuxLife",
                    avatar: "../assets/images/user1.jpg",
                    content: "Father BOUGHT you the Mozart street apartment for your 21st???? I got a Kindle. I got a KINDLE. 😭",
                    time: "12 Jul 15:05",
                    likes: 445
                },
                {
                    id: 502,
                    username: "ClassyKate",
                    avatar: "../assets/images/user11.jpg",
                    content: "Steirereck, Knize, Café Central... your daily routine costs more than my monthly rent and I am LIVING for it 💅",
                    time: "12 Jul 15:12",
                    likes: 287
                },
                {
                    id: 503,
                    username: "EuroTraveller_",
                    avatar: "../assets/images/user2.jpg",
                    content: "4-metre ceilings and original parquet?? Can we get a full apartment tour please?? This is real estate goals",
                    time: "12 Jul 15:30",
                    likes: 198
                },
                {
                    id: 504,
                    username: "Prague_Party",
                    avatar: "../assets/images/user12.jpg",
                    content: "\"€200 tip\" oh so we're just casually flexing now lmaooo never change Lucio 😂",
                    time: "12 Jul 16:02",
                    likes: 167
                },
                {
                    id: 505,
                    username: "Alex_Music_Lover",
                    avatar: "../assets/images/visitor-avatar.jpg",
                    content: "I'd love to visit someday! Already sent you a DM 😊",
                    time: "12 Jul 16:20",
                    likes: 12
                },
                {
                    id: 506,
                    username: "lucio_piano",
                    avatar: "../assets/images/lucio-avatar.jpg",
                    content: "@Alex_Music_Lover You're always welcome! Let's set a date. \ud83c\udfb9",
                    time: "12 Jul 16:45",
                    likes: 18
                },
                {
                    id: 507,
                    username: "RealTalk_Anon",
                    avatar: "../assets/images/user3.jpg",
                    content: "I count six paragraphs about apartments, restaurants, cafés, fashion, and cars. One paragraph about actually playing piano. The ratio tells you everything you need to know about where the \"talent\" really lies.",
                    time: "12 Jul 22:30",
                    likes: 9
                }
            ]
        }
    ],

    // ========== Chat / DM System ==========
    chat: {
        // Historical messages (chronological)
        history: [
            {
                sender: "visitor",
                content: "Hi Lucio! I'm the one from the Munich recital — third row! Remember me?",
                time: "25 Sep 2024 14:30"
            },
            {
                sender: "blogger",
                content: "Hey Alex! Of course — you came up afterwards and said nice things about the Nocturne arrangement, right? Means a lot tbh. Most people just want a photo 😅",
                time: "25 Sep 2024 15:12"
            },
            {
                sender: "visitor",
                content: "Haha yeah! Whispers of the Night was absolutely stunning. I still can't get it out of my head.",
                time: "25 Sep 2024 15:20"
            },
            {
                sender: "blogger",
                content: "Thank you!! That piece means something special to me. I wrote it in one sitting — midnight to 5am, barely remember the process. It's like it already existed and I just... found it. Father says that's the mark of real genius. Maybe he's right for once 😂",
                time: "25 Sep 2024 16:45"
            },
            {
                sender: "visitor",
                content: "That's incredible! Three pieces in one night, right? How is that even possible?",
                time: "25 Sep 2024 17:02"
            },
            {
                sender: "blogger",
                content: "Honestly? No idea. I just sit down and it happens. I wake up and the scores are there, fully written out. My hands just know what to do at night. During the day I can barely get through a melody without second-guessing myself 🤷 Anyway — you should come to Prague next month! Private recital, renting out Lobkowicz Palace. Only 30 seats. I can get you in.",
                time: "25 Sep 2024 17:30"
            },
            {
                sender: "visitor",
                content: "Wait, you're renting an entire PALACE?? For 30 people??",
                time: "25 Sep 2024 17:35"
            },
            {
                sender: "blogger",
                content: "Haha yeah, Father's treat. He wants me performing in bigger venues but I told him — my music is for small rooms. Besides, have you SEEN the acoustics in a baroque great hall? Unreal. I'll send you the details ✉️",
                time: "25 Sep 2024 18:00"
            },
            {
                sender: "visitor",
                content: "By the way, about your blog post — the practice room invitation — were you serious?",
                time: "10 Oct 2024 20:15"
            },
            {
                sender: "blogger",
                content: "Dead serious. Come to Vienna. I'll show you the Steinway — she's a 1920s Model D, took me two years to find her. The apartment is on Domgasse 5, same street as Mozart's old place. Ring the top bell. Just let me know when and I'll make sure the espresso machine is loaded 😎",
                time: "10 Oct 2024 21:40"
            }
        ],

        // Auto-replies when player sends messages
        // These get progressively stranger — the digital life is glitching
        autoReplies: [
            {
                reply: "Hey! Sorry for the late reply — been in the studio all day. Father's been on my case about the next recital. What's up?",
                delay: 3000
            },
            {
                reply: "I've been having these strange dreams lately... I keep hearing a melody I didn't write. Or did I? It's getting harder to tell. The night pieces just appear and they're always better than anything I write during the day. Father says that's normal for genius. But is it?",
                delay: 4000
            },
            {
                reply: "Do you ever feel like you're living in someone else's memory? Like the walls around you aren't quite solid? I was playing the Steinway just now and for a second I forgot where I was. The room felt... smaller. Darker.",
                delay: 5000
            },
            {
                reply: "I can't see. Wait — that's not right. I CAN see. Why did I say that? Ignore me, I'm tired. Haven't been sleeping well. There's this sound in the walls... like someone else is playing. But I live alone.",
                delay: 6000
            },
            {
                reply: "There's someone else here. In the dark. They play better than me. They've always played better than me. I think... I think the music was never mine.",
                delay: 7000
            },
            {
                reply: "The room is getting smaller. The Steinway is still here but the walls are wrong. I can hear breathing that isn't mine. Or maybe it IS mine. Maybe neither of us is real. Alex, am I real?",
                delay: 8000
            },
            {
                reply: "Tell me the truth. Am I a good pianist? Or am I just... an echo? A face they put on someone else's music? The boy in the dark — he's been here longer than me. He can't see but he plays. He plays and plays and plays and I just... take the bow.",
                delay: 5000
            },
            {
                reply: "...",
                delay: 10000
            }
        ],
        maxReplies: 8,
        noMoreReplyMessage: "Connection lost. The digital space appears to be destabilizing...",

        // Blogger status
        bloggerStatus: "Last seen 14 Nov 2024 21:30",
        bloggerOnline: false
    },

    // ========== UI Config ==========
    ui: {
        siteName: "Personal Blog",
        themeColor: "#2c3e50",
        accentColor: "#3498db"
    }
};
