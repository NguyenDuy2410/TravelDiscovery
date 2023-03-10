const dataHeader = [{ header_id: "Header", language: "Ngôn Ngữ" }];

const data = [
    {
        pakageItem_id: "PakageItem",
        image: "./image/bacCan.png",
        itemContent: {
            destination: "Bắc Cạn",
            title: "Du lịch Bắc cạn",
            price: "800,000",
            content:
                "Khám phá Bắc cạn trong dịp cuối năm là lựa chọn tốt để tham quan các danh làm thắng cảnh.",
        },
    },

    {
        pakageItem_id: "PakageItem",
        image: "./image/bacGiangTour.png",
        itemContent: {
            destination: "Bắc Giang",
            title: "Du lịch Bắc Giang",
            price: "900,000",
            content:
                "Bắc Giang nổi tiếng là cái nôi của những làn điệu chèo cổ cùng các tín ngưỡng văn hóa lâu đời đặc sắc của dân tộc. Vì thế, khi đến đây bạn sẽ cảm nhận được một nét đẹp cổ kín, trầm lắng bởi những công trình kiến trúc độc đáo từ xa xưa vẫn còn được giữ nguyên đến ngày nay.",
        },
    },

    {
        pakageItem_id: "PakageItem",
        image: "./image/anGiang.png",
        itemContent: {
            destination: "An Giang",
            title: "Du lịch An Giang",
            price: "900,000",
            content:
                "Khám phá An Giang để tham quan được những di tích lịch sử và các món ăn miền tây. Được tìm hiểu nhiều điều mới lạ trên mảnh đất thất sơn của An Giang. Biết được những điều ly kỳ về ngọn núi cấm nổi tiếng nhất ở miền tây",
        },
    },
    {
        pakageItem_id: "PakageItem",
        image: "./image/du-lich-ha-noi.jpg",
        itemContent: {
            destination: "Hà Nội",
            title: "Du lịch Hà Nội",
            price: "900,000",
            content:
                "Du lịch Hà Nội “36 phố phường”, “trà chanh chém gió” hay “trà đá vỉa hè” là những cụm từ được nhiều du khách nhớ đến khi nhắc về Hà Nội. Mảnh đất thủ đô gây ấn tượng cho khách không chỉ bởi lịch sử nghìn năm văn hiến mà còn bởi một màu sắc đặc trưng chẳng thể lẫn với nơi nào.",
        },
    },
    {
        pakageItem_id: "PakageItem",
        image: "./image/haGiangTour.jpg",
        itemContent: {
            destination: "Hà Giang",
            title: "Du lịch Hà Giang",
            price: "900,000",
            content:
                "Hà Giang là một tỉnh nằm ở phía Đông Bắc Việt Nam. Thật sự khó tìm thấy một vùng đất nào mà đẹp cả bốn mùa trong năm như nơi này! Mùa xuân tới, Hà Giang ngập tràn sắc hoa mận, hoa đào khoe, rực rỡ trong tiết trời se lạnh.",
        },
    },
];

const dataTour = [
    {
        tourTravel_id: "1",
        tourInfo: {
            image: "./image/vietnamguide.png",
            location: "TPHCM",
            quantity: "xem chi tiết",
        },
    },

    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/anGiang.png",
            location: "Ag giang",
            quantity: "xem chi tiết",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/imageTravel.png",
            location: "Hà nội ",
            quantity: "xem chi tiết",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/vungTau.png",
            location: "Bà Rịa-Vũng Tàu",
            quantity: "xem chi tiết",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/bacLieu.png",
            location: "Bạc Liêu",
            quantity: "xem chi tiết",
        },
    },

    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/bacCan.png",
            location: "Bắc Kạn",
            quantity: "xem chi tiết",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/bacGang.png",
            location: "Bắc giang",
            quantity: "xem chi tiết",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/bacNinh.png",
            location: "Bắc Ninh",
            quantity: "xem chi tiết",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/benTre.png",
            location: "Bến tre",
            quantity: "xem chi tiết",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/binhDuong.png",
            location: "Bình Dương",
            quantity: "xem chi tiết",
        },
    },
];

const dataNewsTravel = [
    {
        dataNewsTravel_id: "NewsTravel",
        dataNews: {
            img: "./image/duLichCaMau.png",
            title: "Tất tần tật kinh nghiệm du lịch Cà Mau",
            content:
                "Thời điểm tốt nhất mà bạn nên đi du lịch Cà Mau đó chính là khoảng thời gian từ tháng 12 - tháng 4 hàng năm. Vì đây là mùa khô tại Cà Mau. Lúc này thời tiết khô ráo, bạn sẽ có cơ hội tham gia nhiều trải nghiệm và thăm thú được nhiều nơi hơn.",
        },
    },
    {
        dataNewsTravel_id: "NewsTravel",
        dataNews: {
            img: "./image/tien-giang.jpg",
            title: "Cẩm nang du lịch Tiền Giang ",
            content:
                "Tiền Giang được thiên nhiên ưu ái với hai mùa rõ rệt là mùa nắng và mùa mưa. Nên du khách có thể đến khám phá Tiền Giang tất cả các mùa trong năm. Tuy nhiên, du khách có thể đi vào thời điểm mùa hè tầm tháng 6 đến tháng 9 sẽ là thích hợp nhất để có thể thưởng thức, chiêm ngưỡng nhiều loại cây ăn trái miền Tây và mùa này cũng trở nên nhộn nhịp hơn, có nhiều hoạt động du lịch hơn.",
        },
    },
    {
        dataNewsTravel_id: "NewsTravel",
        dataNews: {
            img: "./image/anGiang.png",
            title: "Bỏ túi kinh nghiệm du lịch An Giang tự túc",
            content:
                "du lịch An Giang tự túc vẫn là một cụm từ xa lạ với các tín đồ du lịch, khi nhiều người chỉ biết đến An Giang qua chùa Bà Châu Đốc hay rừng tràm Trà Sư. Thật ra, An Giang là điểm đến hấp dẫn với nhiều điều chờ bạn khám phá, trải nghiệm",
        },
    },
];

const dataTourist = [
    {
        dataTourist_id: "TouristAttraction",
        dataTouristComt: {
            img: [
                "./image/bacCan.png",
                "./image/bacGang.png",
                "./image/bacNinh.png",
                "./image/1HPhong.jpg",
            ],
            title: "Miền Bắc",
            content:
                "Khám phá miền bac là một lựa chọn dành cho khách du lịch nước ngoài, nó mang phong cách cổ kính.",
            city: ["Hà nội", "Nam định", "Huế", "Lào cai", "..."],
        },
    },
    {
        dataTourist_id: "TouristAttraction",
        dataTouristComt: {
            img: [
                "./image/hauGiang.jpg",
                "./image/socTrang.png",
                "./image/caMau.png",
                "./image/benTre.png",
            ],
            title: "Miền Nam",
            content:
                "Khám phá miền bac là một lựa chọn dành cho khách du lịch nước ngoài, nó mang phong cách cổ kính.",
            city: ["Hồ Chí Minh", "Tây ninh", "Mỹ tho", "Cân thơ", "..."],
        },
    },
];

const dataFooter = [
    {
        dataFooter_id: "dataFooter",
        dataTitle: {
            title_Info: "Thông tin",
            title_Contact: "Liên hệ",
        },
        dataMienNam: [
            "Bình phước",
            "Bình dương",
            "Đồng nai",
            "Tây ninh",
            "Bà rịa-Vũng tàu",
            "Long an",
            "Đồng tháp",
            "Tiền giang",
            "Bến tre",
            "Vĩnh long",
            "An giang",
            "Trà vinh",
            "Hậu giang",
            "Kiên giang",
            "Sóc trăng",
            "Bạc Liêu",
        ],
        dataMienBac: [
            "Hà Giang",
            "Cao Bằng",
            "Bắc Kạn",
            "Lạng Sơn",
            "Tuyên Quang",
            "Yên Bái",
            "Thái Nguyên",
            "Bắc Giang",
            "Lai Châu",
            "Điện Biên",
            "Sơn La",
            "Hòa Bình",
            "Thanh Hóa",
            "Nghệ An",
            "Thái Nguyên",
            "Phú Thọ",
        ],

        dataContact: [
            "96/9/7 đường số 1, phường 4, Gò Vấp, TPHCM",
            "0382612491",
            "nvlduy24102000@gmail.com",
        ],
        dataInfo: [
            "Tạp chí du lịch",
            "Cẩm nang du lịch",
            "Tin tức",
            "Chính sách quyền riêng tư",
            "Bảo mật",
        ],
    },
];

const dataEN = [
    {
        pakageItem_id: "PakageItem",
        image: "./image/bacCan.png",
        itemContent: {
            destination: "Bac Can",
            title: "Bac Kan tourism",
            price: "800,000",
            content:
                "Exploring Bac Kan at the end of the year is a good choice to visit the scenic spots.",
        },
    },

    {
        pakageItem_id: "PakageItem",
        image: "./image/bacGiangTour.png",
        itemContent: {
            destination: "Bac Giang",
            title: "Bac Giang Tourism",
            price: "900,000",
            content:
                "Bac Giang is famous for being the cradle of ancient cheo tunes and unique cultural beliefs of the nation. Therefore, when you come here, you will feel an ancient and quiet beauty because the unique architectural works from the past are still preserved to this day.",
        },
    },

    {
        pakageItem_id: "PakageItem",
        image: "./image/anGiang.png",
        itemContent: {
            destination: "An Giang",
            title: "Tourism An Giang",
            price: "900,000",
            content:
                "Explore An Giang to visit historical sites and western dishes. Explore An Giang to visit historical sites and western dishes. Explore An Giang to visit historical sites and western dishes. Explore An Giang to visit historical sites and western dishes.",
        },
    },
    {
        pakageItem_id: "PakageItem",
        image: "./image/du-lich-ha-noi.jpg",
        itemContent: {
            destination: "Ha Noi",
            title: "Traveling Hanoi",
            price: "900,000",
            content:
                "Traveling to Hanoi, '36 streets', 'lemon tea with the wind' or 'sidewalk iced tea' are phrases that many tourists remember when referring to Hanoi. The land of the capital impresses visitors not only by its thousand-year history of civilization but also by a distinctive color that cannot be confused with any other place.",
        },
    },
    {
        pakageItem_id: "PakageItem",
        image: "./image/haGiangTour.jpg",
        itemContent: {
            destination: "Ha Giang",
            title: "Ha Giang Tourism",
            price: "900,000",
            content:
                "Ha Giang is a province located in the northeast of Vietnam. It's really hard to find a land that is as beautiful in all four seasons of the year as this place! Next spring, Ha Giang is filled with plum blossoms, blooming peach blossoms, brilliant in the cold weather.",
        },
    },
];

const dataTourEN = [
    {
        tourTravel_id: "1",
        tourInfo: {
            image: "./image/vietnamguide.png",
            location: "TPHCM",
            quantity: "See details",
        },
    },

    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/anGiang.png",
            location: "Ag giang",
            quantity: "See details",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/imageTravel.png",
            location: "Ha noi ",
            quantity: "See details",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/vungTau.png",
            location: "BA Ria Vung Tau",
            quantity: "See details",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/bacLieu.png",
            location: "Bac Lieu",
            quantity: "See details",
        },
    },

    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/bacCan.png",
            location: "Bac Kan",
            quantity: "See details",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/bacGang.png",
            location: "Bac giang",
            quantity: "See details",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/bacNinh.png",
            location: "Bac Ninh",
            quantity: "See details",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/benTre.png",
            location: "Ben tre",
            quantity: "See details",
        },
    },
    {
        tourTravel_id: "2",
        tourInfo: {
            image: "./image/binhDuong.png",
            location: "Binh Duong",
            quantity: "See details",
        },
    },
];

const dataNewsTravelEN = [
    {
        dataNewsTravel_id: "NewsTravel",
        dataNews: {
            img: "./image/duLichCaMau.png",
            title: "All Ca Mau travel experiences",
            content:
                "The best time that you should travel to Ca Mau is the period from December to April every year. Because this is the dry season in Ca Mau. At this time, the weather is dry, you will have the opportunity to participate in many experiences and visit more places.",
        },
    },
    {
        dataNewsTravel_id: "NewsTravel",
        dataNews: {
            img: "./image/tien-giang.jpg",
            title: "Tien Giang travel guide ",
            content:
                "Tien Giang is favored by nature with two distinct seasons: the dry season and the rainy season. So visitors can come to explore Tien Giang in all seasons of the year. However, visitors can go in the summer time from June to September, which will be the most appropriate to enjoy and admire many kinds of Western fruit trees and this season also becomes more bustling. more tourist activities.",
        },
    },
    {
        dataNewsTravel_id: "NewsTravel",
        dataNews: {
            img: "./image/anGiang.png",
            title: "Pocket An Giang self-sufficient travel experience",
            content:
                "Self-sufficient An Giang tourism is still a strange phrase for travel believers, when many people only know An Giang through Ba Chau Doc Pagoda or Tra Su Melaleuca forest. In fact, An Giang is an attractive destination with many things waiting for you to discover and experience",
        },
    },
];

const dataTouristEN = [
    {
        dataTourist_id: "TouristAttraction",
        dataTouristComt: {
            img: [
                "./image/bacCan.png",
                "./image/bacGang.png",
                "./image/bacNinh.png",
                "./image/1HPhong.jpg",
            ],
            title: "Mien Bac",
            content:
                "Exploring the bac is an option for foreign tourists, it has an ancient style.",
            city: ["Hanoi", "Nam Dinh", "Hue", "Lao Cai", "..."],
        },
    },
    {
        dataTourist_id: "TouristAttraction",
        dataTouristComt: {
            img: [
                "./image/hauGiang.jpg",
                "./image/socTrang.png",
                "./image/caMau.png",
                "./image/benTre.png",
            ],
            title: "Mien Nam",
            content:
                "Exploring the bac domain is an option for foreign tourists, it has an ancient style.",
            city: ["Ho Chi Minh", "Tay Ninh", "My tho", "Can Tho", "..."],
        },
    },
];

const dataFooterEN = [
    {
        dataFooter_id: "dataFooter",
        dataTitle: {
            title_Info: "Information",
            title_Contact: "Contact",
        },
        dataMienNam: [
            "Binh Phuoc",
            "Binh Duong",
            "Dong Nai",
            "Tay Ninh",
            "Ba Ria - Vung Tau",
            "Long an",
            "Donh Thap",
            "Tien Giang",
            "Ben Tre",
            "Vinh Long",
            "An giang",
            "Tra Vinh",
            "Hau Giang",
            "Kien Giang",
            "Soc Trang",
            "Bac Lieu",
        ],
        dataMienBac: [
            "Ha Giang",
            "Cao Bang",
            "Bac Kan",
            "Lang Son",
            "Tuyen Quang",
            "Yen Bai",
            "Thai Nguyen",
            "Bac Giang",
            "Lai Chau",
            "Đien Bien",
            "Sen La",
            "Hoa Binh",
            "Thanh Hoa",
            "Nghe An",
            "Thai Nguyen",
            "Phu Tho",
        ],

        dataContact: [
            "96/9/7 Street No. 1, Ward 4, Go Vap, HCMC",
            "0382612491",
            "nvlduy24102000@gmail.com",
        ],
        dataInfo: [
            "Travel magazines",
            "Travel Guide",
            "News",
            "Privacy Policy",
            "Security",
        ],
    },
];
const dataWeather = [
    {
        dataWeather_id: "dataWeather",
        dataInfoCity: {
            city: "Ho Chi Minh",
            date: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            windPower: "South, 4.55m/s",
            amountOfWater: "93%",
            temperature: "+35",
            img: "../image/troiNang.png",
        },
    },
];
const infoForecast = [
    {
        infoForecast_id: "nfoForecast",
        dataInfoForecast: {
            dataInfoForecast_id: "dataInfoForecast",
            img: "../image/mua.png",
            date: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            temperature: "+35",
        },
    },
    {
        infoForecast_id: "nfoForecast",
        dataInfoForecast: {
            dataInfoForecast_id: "dataInfoForecast",
            img: "../image/muaSamChop.png",
            date: [
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
                "Monday",
            ],
            temperature: "+37",
        },
    },
    {
        infoForecast_id: "nfoForecast",
        dataInfoForecast: {
            dataInfoForecast_id: "dataInfoForecast",
            img: "../image/samChop.png",
            date: [
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
                "Monday",
                "Tuesday",
            ],
            temperature: "+38",
        },
    },
    {
        infoForecast_id: "nfoForecast",
        dataInfoForecast: {
            dataInfoForecast_id: "dataInfoForecast",
            img: "../image/mua.png",
            date: [
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
            ],
            temperature: "+37",
        },
    },
    {
        infoForecast_id: "nfoForecast",
        dataInfoForecast: {
            dataInfoForecast_id: "dataInfoForecast",
            img: "../image/troiNang.png",
            date: [
                "Friday",
                "Saturday",
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
            ],
            temperature: "+38",
        },
    },
];
export {
    dataHeader,
    dataTour,
    data,
    dataNewsTravel,
    dataTourist,
    dataFooter,
    dataWeather,
    infoForecast,
    dataFooterEN,
    dataTourEN,
    dataEN,
    dataNewsTravelEN,
    dataTouristEN,
};
