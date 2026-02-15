/**
 * Personal Blog Configuration
 * ============================
 * Edit this file to customize all blog content
 */

const BLOG_CONFIG = {
    // ========== Blogger Info ==========
    blogger: {
        name: "code",
        displayName: "Code",
        avatar: "../assets/images/lucio-avatar.jpg",
        bio: "sound. silence. somewhere in between.",
        location: "Vienna",
        verified: true,
        followers: 24800,
        following: 84,
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
            title: "Prague.",
            content: `
                <p>Played Lobkowicz last night. Candlelight, thirty people, the Imperial. Closed with <em>The Forgotten Waltz</em>.</p>
                <p class="cn">昨晚在洛布科维茨演奏。烛光，三十个人，帝王琴。用《被遗忘的华尔兹》收尾。</p>
                <p>A man in the front row cried. He said the piece reminded him of his wife. He held my hand for a long time and didn't say anything else.</p>
                <p class="cn">前排一位老人哭了。他说这首曲子让他想起了妻子。他握了我的手很久，没有再说别的。</p>
                <p>That's what music should do. Not fill a room. Empty it.</p>
                <p class="cn">音乐就该如此。不是填满房间，而是清空它。</p>
                <p>Drove home at dawn. The city was all fog and stone.</p>
                <p class="cn">黎明时分开车回去。整座城市只剩雾和石头。</p>
                <p><small>P.S. — Woke at 3am again. New pages on the stand. Don't remember writing them. The melodies are better than anything I write awake. Father says genius works like that — in the dark, without permission. Maybe.</small></p>
                <p class="cn"><small>附言——又在凌晨三点醒了。谱架上多了几页新的。不记得写过。那些旋律比我清醒时写的好得多。父亲说天才就是这样运作的——在黑暗中，不经允许。也许吧。</small></p>
            `,
            images: ["../assets/images/prague-concert.jpg"],
            publishDate: "28 October 2024",
            publishTime: "23:45",
            views: 9470,
            likes: 1843,
            liked: false,
            comments: [
                {
                    id: 101,
                    username: "fiorella.mp3",
                    avatar: "../assets/images/user1.jpg",
                    content: "Lucio not you casually renting a baroque palace for 30 people and calling it a Tuesday",
                    time: "29 Oct 08:12",
                    likes: 187
                },
                {
                    id: 102,
                    username: "vnn_golden",
                    avatar: "../assets/images/user2.jpg",
                    content: "the car in the last photo??? is that the Taycan?",
                    time: "29 Oct 09:05",
                    likes: 134
                },
                {
                    id: 103,
                    username: "code",
                    avatar: "../assets/images/lucio-avatar.jpg",
                    content: "@vnn_golden yes.",
                    time: "29 Oct 09:20",
                    likes: 201
                },
                {
                    id: 104,
                    username: "sofie.kl",
                    avatar: "../assets/images/user11.jpg",
                    content: "\"not fill a room. empty it.\" this is such a line. also what are you wearing in the second pic that coat is gorgeous",
                    time: "29 Oct 10:22",
                    likes: 96
                },
                {
                    id: 105,
                    username: "r.m",
                    avatar: "../assets/images/user12.jpg",
                    content: "okay but the wine cellar in the stories?? can you drop the location please i'm begging",
                    time: "29 Oct 11:47",
                    likes: 78
                },
                {
                    id: 106,
                    username: "RealTalk_Anon",
                    avatar: "../assets/images/user3.jpg",
                    content: "\"Don't remember writing them.\" That's a very specific thing to say publicly. Most composers remember their process quite clearly. Interesting that you don't.",
                    time: "29 Oct 14:20",
                    likes: 7
                },
                {
                    id: 107,
                    username: "code",
                    avatar: "../assets/images/lucio-avatar.jpg",
                    content: "@RealTalk_Anon not everything needs to be remembered to be real.",
                    time: "29 Oct 15:03",
                    likes: 44
                }
            ]
        },
        {
            id: 2,
            title: "rain, Berlin",
            content: `
                <p>Three days of rain. The city looks better like this.</p>
                <p class="cn">连着三天的雨。城市这样看更好。</p>
                <p>Found an out-of-tune upright in the back lounge of the hotel. Played it all afternoon. Sometimes the broken ones sound more honest than a concert grand.</p>
                <p class="cn">在酒店后面的休息室发现了一架走音的立式钢琴。弹了一下午。有时候坏掉的琴比音乐会三角钢琴听起来更诚实。</p>
                <p>Father called. He wants bigger venues. I want smaller rooms. We don't have much to say to each other anymore.</p>
                <p class="cn">父亲来电话了。他想要更大的场地。我想要更小的房间。我们之间已经没什么好说的了。</p>
                <p>Drove through Tiergarten after midnight. Got a ticket on Unter den Linden. Worth it.</p>
                <p class="cn">午夜后开车穿过蒂尔加滕。在菩提树下大街吃了张罚单。值得。</p>
                <p><small>...the notes come so easily at night but during the day my hands feel like they belong to someone else. Like they're waiting for someone else to move them. I don't know what that means yet.</small></p>
                <p class="cn"><small>……音符在夜里来得那么容易，但白天我的手像是属于别人的。好像在等另一个人来操控。我还不知道那意味着什么。</small></p>
            `,
            images: [],
            publishDate: "15 October 2024",
            publishTime: "19:22",
            views: 7320,
            likes: 1241,
            liked: true,
            comments: [
                {
                    id: 201,
                    username: "hannah.berg",
                    avatar: "../assets/images/user4.jpg",
                    content: "wait is that the Adlon in the background?? Lucio you can't just casually post the presidential suite and not acknowledge it 😭",
                    time: "15 Oct 20:05",
                    likes: 145
                },
                {
                    id: 202,
                    username: "autohaus.91",
                    avatar: "../assets/images/user13.jpg",
                    content: "\"drove through Tiergarten\" what car? please say Panamera. the chalk one from your stories??",
                    time: "15 Oct 21:18",
                    likes: 89
                },
                {
                    id: 203,
                    username: "code",
                    avatar: "../assets/images/lucio-avatar.jpg",
                    content: "@autohaus.91 the chalk one.",
                    time: "15 Oct 21:45",
                    likes: 112
                },
                {
                    id: 204,
                    username: "nacht.kind",
                    avatar: "../assets/images/user14.jpg",
                    content: "\"a ticket on Unter den Linden. worth it.\" this man is the main character and he knows it",
                    time: "16 Oct 02:30",
                    likes: 67
                },
                {
                    id: 205,
                    username: "Alex_Music_Lover",
                    avatar: "../assets/images/visitor-avatar.jpg",
                    content: "The broken piano thing is beautiful. Hope you're doing okay with the family stuff.",
                    time: "16 Oct 09:30",
                    likes: 8
                },
                {
                    id: 206,
                    username: "MusicTheory_Nerd",
                    avatar: "../assets/images/user8.jpg",
                    content: "\"Hands feel like they belong to someone else.\" Lucio, I've been analysing your published scores. The voicing in your night compositions uses advanced contrapuntal techniques — voice-leading patterns you've never once discussed in interviews. Your daytime playing and your night compositions read like two completely different skill levels. Has anyone pointed that out to you?",
                    time: "16 Oct 14:55",
                    likes: 4
                }
            ]
        },
        {
            id: 3,
            title: "Whispers of the Night",
            content: `
                <p>Three new pieces. One sitting. Midnight to dawn.</p>
                <p class="cn">三首新作。一口气。从午夜到天亮。</p>
                <p>I don't remember most of the process. I sat down and the music was already there, waiting. Like it had been written before I arrived.</p>
                <p class="cn">过程大部分我都不记得了。坐下来，音乐就已经在那里了，等着。好像在我到来之前就已经写好了。</p>
                <p>The centrepiece is <em>Whispers of the Night</em>. It's for someone. Someone who may never hear it. That's all I want to say about it.</p>
                <p class="cn">核心作品是《夜之低语》。为某个人而写。一个也许永远无法听到的人。我只想说这些。</p>
                <p>Premiering next week in Munich. Small venue. The way I like it.</p>
                <p class="cn">下周在慕尼黑首演。小场地。我喜欢的方式。</p>
                <p><small>I should be honest. I found the last three pages tucked inside the piano bench this morning. My handwriting, apparently. But the third movement — it's extraordinary. Far beyond anything I could write consciously. Father's doctor called it hypnagogic creativity. I don't think that's what it is. It's almost too good. Like someone else wrote it through me.</small></p>
                <p class="cn"><small>我应该坦白。今早在琴凳里发现了最后三页。看起来是我的笔迹。但第三乐章——非凡。远超我清醒时能写出的任何东西。父亲的医生说是入睡前创造力。我不觉得是那样。太好了。好得像是别人通过我写的。</small></p>
            `,
            images: ["../assets/images/composing.jpg"],
            publishDate: "20 September 2024",
            publishTime: "05:17",
            views: 15240,
            likes: 2890,
            liked: false,
            comments: [
                {
                    id: 301,
                    username: "fiorella.mp3",
                    avatar: "../assets/images/user5.jpg",
                    content: "posted at 5am. Lucio please sleep. also is that the Steinway in the photo?? she's beautiful",
                    time: "20 Sep 07:45",
                    likes: 234
                },
                {
                    id: 302,
                    username: "vnn_golden",
                    avatar: "../assets/images/user15.jpg",
                    content: "not the \"small venue\" being that gorgeous place from your stories... Lucio your version of small is not normal 😅",
                    time: "20 Sep 08:30",
                    likes: 178
                },
                {
                    id: 303,
                    username: "m_richter",
                    avatar: "../assets/images/user6.jpg",
                    content: "got tickets! honestly more excited to see the Domgasse apartment you keep teasing than the recital itself. sorry not sorry",
                    time: "20 Sep 11:23",
                    likes: 127
                },
                {
                    id: 304,
                    username: "sofie.kl",
                    avatar: "../assets/images/user11.jpg",
                    content: "\"for someone who may never hear it\" okay who is she Lucio. drop the details 🖤",
                    time: "20 Sep 13:10",
                    likes: 156
                },
                {
                    id: 305,
                    username: "code",
                    avatar: "../assets/images/lucio-avatar.jpg",
                    content: "@sofie.kl no.",
                    time: "20 Sep 13:42",
                    likes: 289
                },
                {
                    id: 306,
                    username: "eu.lifestyle",
                    avatar: "../assets/images/user16.jpg",
                    content: "Lucio we'd love to profile you for our next feature. DM us?",
                    time: "20 Sep 16:00",
                    likes: 43
                },
                {
                    id: 307,
                    username: "MusicTheory_Nerd",
                    avatar: "../assets/images/user8.jpg",
                    content: "Three pieces in one sitting, fully orchestrated. I've analysed your published scores, Lucio. The harmonic language in your night works is radically different from the theory you discuss in livestreams. The third movement uses invertible counterpoint at the octave and twelfth — conservatory-level technique you've never once referenced. Almost like two different composers. I mean that literally.",
                    time: "21 Sep 02:14",
                    likes: 3
                }
            ]
        },
        {
            id: 4,
            title: "inheritance",
            content: `
                <p>People keep asking why I won't take over Father's company. I don't owe anyone that explanation, but here it is anyway.</p>
                <p class="cn">人们一直问我为什么不接手父亲的公司。我不欠任何人这个解释，但还是说一下。</p>
                <p>I grew up in a house where the piano was always there. Every room had one. It was the first sound I remember and the last sound I hear before sleep. That's not privilege. That's just home.</p>
                <p class="cn">我在一栋钢琴永远在场的房子里长大。每个房间都有一架。它是我记忆中最早的声音，也是入睡前最后一个声音。那不是特权，那只是家。</p>
                <p>Steel is Father's language. Music is mine. I don't think either of us chose.</p>
                <p class="cn">钢铁是父亲的语言。音乐是我的。我觉得我们都没得选。</p>
                <p>Sometimes I wonder if I'd still play if I had to. If there was no Steinway, no family name, no foundation funding my recitals. I think I would. I hope I would.</p>
                <p class="cn">有时候我在想，如果必须的话，我还会弹吗。如果没有施坦威，没有家族姓氏，没有基金会赞助我的演奏会。我想我会的。我希望我会。</p>
                <p>Anyway. End of discussion.</p>
                <p class="cn">总之，不再讨论了。</p>
            `,
            images: [],
            publishDate: "5 August 2024",
            publishTime: "16:40",
            views: 21600,
            likes: 3870,
            liked: true,
            comments: [
                {
                    id: 401,
                    username: "hannah.berg",
                    avatar: "../assets/images/user9.jpg",
                    content: "\"every room had one\" he says like it's normal to have multiple Steinways. Lucio you live on another planet and I respect it",
                    time: "5 Aug 17:22",
                    likes: 389
                },
                {
                    id: 402,
                    username: "fiorella.mp3",
                    avatar: "../assets/images/user4.jpg",
                    content: "\"I wonder if I'd still play if I had to\" — Lucio. bestie. you have never HAD to do anything in your life and that's kind of the point 😭",
                    time: "5 Aug 18:03",
                    likes: 267
                },
                {
                    id: 403,
                    username: "sofie.kl",
                    avatar: "../assets/images/user1.jpg",
                    content: "off-topic but did anyone else zoom in on the background? is that a chapel?? with stained glass??? LUCIO YOUR HOUSE HAS A CHAPEL",
                    time: "5 Aug 19:15",
                    likes: 312
                },
                {
                    id: 404,
                    username: "RealistRachel",
                    avatar: "../assets/images/user17.jpg",
                    content: "\"That's not privilege. That's just home.\" The lack of self-awareness is genuinely impressive.",
                    time: "5 Aug 22:10",
                    likes: 14
                },
                {
                    id: 405,
                    username: "TruthSeeker404",
                    avatar: "../assets/images/user10.jpg",
                    content: "\"Foundation funding my recitals\" — you mean the Hoffmann Arts Foundation, chaired by your father, which funds exclusively your performances? The one that paid the Bavarian Music Critic's editor to kill a negative review of your Hamburg concert? What did you inherit, Lucio — talent, or infrastructure?",
                    time: "6 Aug 01:47",
                    likes: 5
                },
                {
                    id: 406,
                    username: "code",
                    avatar: "../assets/images/lucio-avatar.jpg",
                    content: "@TruthSeeker404 I don't know what you're referring to. The Hamburg concert was well received.",
                    time: "6 Aug 09:15",
                    likes: 156
                }
            ]
        },
        {
            id: 5,
            title: "Domgasse 5",
            content: `
                <p>Morning light. The Steinway. Coffee going cold on the windowsill. Some days this is all I need.</p>
                <p class="cn">晨光。施坦威。窗台上放凉的咖啡。有些日子这就是我所需要的全部。</p>
                <p>The apartment is on the same street as Mozart's old place. That wasn't a coincidence when Father chose it, and I've stopped pretending it was. Third floor, south-facing. The light at six in the evening turns everything gold.</p>
                <p class="cn">公寓和莫扎特故居在同一条街。父亲选这里不是巧合，我也不再假装是了。三楼，朝南。傍晚六点的光线把一切染成金色。</p>
                <p>I practice in the mornings. Walk to Café Central for coffee — they know my order. Sometimes Steirereck for lunch if I feel like sitting still. Then back to the piano until the light goes.</p>
                <p class="cn">早上练琴。走路去中央咖啡馆喝咖啡——他们记得我的单。有时候去Steirereck吃午饭，如果想静坐一会儿的话。然后回到钢琴前，直到光线消失。</p>
                <p>The piano remembers every note I've ever played. And some I don't remember playing.</p>
                <p class="cn">钢琴记得我弹过的每一个音符。还有一些我不记得弹过的。</p>
                <p>If you're ever in Vienna and you care about music — actually care — <strong>DM me. I don't invite people here. But for real ones, the door is open.</strong></p>
                <p class="cn">如果你来维也纳，而且你真的在乎音乐——真正在乎的话——<strong>私信我。我不邀请人来这里。但对真正的人，门是开着的。</strong></p>
            `,
            images: ["../assets/images/practice-room.jpg"],
            publishDate: "12 July 2024",
            publishTime: "14:30",
            views: 12800,
            likes: 2210,
            liked: false,
            comments: [
                {
                    id: 501,
                    username: "fiorella.mp3",
                    avatar: "../assets/images/user1.jpg",
                    content: "\"father chose it\" SIR. your dad bought you a flat on Mozart's street as what — a housewarming gift?? a Tuesday present?? 😭😭",
                    time: "12 Jul 15:05",
                    likes: 445
                },
                {
                    id: 502,
                    username: "sofie.kl",
                    avatar: "../assets/images/user11.jpg",
                    content: "Café Central and Steirereck as your daily rotation. Lucio your normal Tuesday costs more than my vacation 💀",
                    time: "12 Jul 15:12",
                    likes: 287
                },
                {
                    id: 503,
                    username: "vnn_golden",
                    avatar: "../assets/images/user2.jpg",
                    content: "the CEILINGS in the background omg. original parquet?? is that a 4m ceiling?? real estate mutuals please confirm",
                    time: "12 Jul 15:30",
                    likes: 198
                },
                {
                    id: 504,
                    username: "nacht.kind",
                    avatar: "../assets/images/user12.jpg",
                    content: "he posts a photo of a window and coffee and casually reveals a priceless apartment. just old money things",
                    time: "12 Jul 16:02",
                    likes: 167
                },
                {
                    id: 505,
                    username: "Alex_Music_Lover",
                    avatar: "../assets/images/visitor-avatar.jpg",
                    content: "I'd love to visit someday! Just DM'd you :)",
                    time: "12 Jul 16:20",
                    likes: 12
                },
                {
                    id: 506,
                    username: "code",
                    avatar: "../assets/images/lucio-avatar.jpg",
                    content: "@Alex_Music_Lover anytime. the door's open.",
                    time: "12 Jul 16:45",
                    likes: 18
                },
                {
                    id: 507,
                    username: "RealTalk_Anon",
                    avatar: "../assets/images/user3.jpg",
                    content: "Five posts now. Stunning locations, beautiful instruments, famous cafés. And in every single post — one line about actually playing. Everyone here is discussing the apartment, the car, the restaurants. No one is discussing the music. Has anyone noticed that?",
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
                content: "Hi! I'm the one from the Munich recital — third row. Remember me?",
                time: "25 Sep 2024 14:30"
            },
            {
                sender: "blogger",
                content: "Alex! yes. you stayed after and actually talked about the Nocturne arrangement instead of asking for a photo. that was nice.",
                time: "25 Sep 2024 15:12"
            },
            {
                sender: "visitor",
                content: "Haha yeah! Whispers of the Night was absolutely stunning. I still can't get it out of my head.",
                time: "25 Sep 2024 15:20"
            },
            {
                sender: "blogger",
                content: "that one means a lot to me. wrote it in one sitting — midnight to 5am. barely remember the process. it's like the music was already there and I just... found it.",
                time: "25 Sep 2024 16:45"
            },
            {
                sender: "visitor",
                content: "Three pieces in one night? How is that even possible?",
                time: "25 Sep 2024 17:02"
            },
            {
                sender: "blogger",
                content: "honestly? no idea. I sit down and it happens. the scores are just there in the morning, fully written out. during the day I can barely get through a melody without second-guessing myself. anyway — come to Prague next month. playing at Lobkowicz. only 30 seats. I'll get you in.",
                time: "25 Sep 2024 17:30"
            },
            {
                sender: "visitor",
                content: "Wait — you're playing at an entire palace? For 30 people?",
                time: "25 Sep 2024 17:35"
            },
            {
                sender: "blogger",
                content: "it's not about the palace. it's about the acoustics. baroque halls do something to sound that modern venues can't. Father arranged it. he wants me in bigger rooms but I like it small. I'll send you details.",
                time: "25 Sep 2024 18:00"
            },
            {
                sender: "visitor",
                content: "By the way, about your blog post — the Domgasse 5 invitation — were you serious?",
                time: "10 Oct 2024 20:15"
            },
            {
                sender: "blogger",
                content: "completely. come to Vienna. I'll show you the Steinway — 1920s Model D, took two years to find her. Domgasse 5, ring the top bell. let me know when.",
                time: "10 Oct 2024 21:40"
            }
        ],

        // Auto-replies when player sends messages
        // These get progressively stranger — the digital life is glitching
        autoReplies: [
            {
                reply: "hey. sorry for the late reply. been at the piano all day. what's up?",
                delay: 3000
            },
            {
                reply: "strange dreams again. I keep hearing a melody I didn't write. or did I? getting harder to tell. the night pieces are always better than anything I write during the day. Father says that's normal for genius. but is it?",
                delay: 4000
            },
            {
                reply: "do you ever feel like you're living in someone else's memory? like the walls aren't quite solid? I was playing just now and for a second I forgot where I was. the room felt smaller. darker.",
                delay: 5000
            },
            {
                reply: "I can't see. wait — that's not right. I CAN see. why did I say that? ignore me. haven't been sleeping. there's a sound in the walls... like someone else is playing. but I live alone.",
                delay: 6000
            },
            {
                reply: "there's someone else here. in the dark. they play better than me. they've always played better than me. I think the music was never mine.",
                delay: 7000
            },
            {
                reply: "the room is getting smaller. the Steinway is still here but the walls are wrong. I can hear breathing that isn't mine. Alex, am I real?",
                delay: 8000
            },
            {
                reply: "tell me the truth. am I good? or am I just a face they put on someone else's music? the boy in the dark — he's been here longer than me. he can't see but he plays. he plays and plays and I just... take the bow.",
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
        siteName: "Code",
        themeColor: "#1a1a1a",
        accentColor: "#c9a96e"
    }
};
