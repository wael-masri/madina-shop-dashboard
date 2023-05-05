import {
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { FiShoppingBag, FiEdit, FiPieChart } from "react-icons/fi";
import { BsKanban, BsBarChart } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineCategory } from "react-icons/md";
import {RiStockLine,RiShoppingBag3Line } from "react-icons/ri";
import { GiLouvrePyramid } from "react-icons/gi";
import {BiGroup} from "react-icons/bi";
import {TbSubtask,TbBrandAdobe,TbDiscount2} from "react-icons/tb"
import {HiOutlineCube} from "react-icons/hi";
import {BsFillBarChartLineFill} from "react-icons/bs";
import {RiRefund2Fill} from "react-icons/ri";
import {FiDollarSign} from "react-icons/fi";
import {FaRegCommentDots} from "react-icons/fa";
export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        link: "dashboard",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "Users",
        link: "users",
        icon: <IoMdContacts />,
      },
      {
        name: "Products",
        link: "products",
        icon: <RiShoppingBag3Line />,
      },
      {
        name: "Categories",
        link: "category",
        icon: <MdOutlineCategory />,
      },
      {
        name: "SubCategories",
        link: "subcategory",
        icon: <TbSubtask />,
      },
      {
        name: "Brands",
        link: "brand",
        icon: <TbBrandAdobe />,
      },
      {
        name: "Reviews",
        link: "review",
        icon: <FaRegCommentDots />,
      },
      {
        name: "Coupons",
        link: "coupon",
        icon: <TbDiscount2 />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "kanban",
        link: "kanban",
        icon: <BsKanban />,
      },
      {
        name: "editor",
        link: "editortext",
        icon: <FiEdit />,
      },
      {
        name: "color-picker",
        link: "colorpicker",
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        link: "",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        link: "",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "bar",
        link: "",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        link: "",
        icon: <FiPieChart />,
      },
      {
        name: "financial",
        link: "",
        icon: <RiStockLine />,
      },
      {
        name: "color-mapping",
        link: "",
        icon: <BsBarChart />,
      },
      {
        name: "pyramid",
        link: "",
        icon: <GiLouvrePyramid />,
      },
      {
        name: "stacked",
        link: "",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];


export const DataCounter = [
  {icon:<FiDollarSign/>,
   counter:"112,354",
   percent:15,
   title:"earning",
   backgroundIcon : "#25fafb"

  },
  {icon:<BiGroup/>,
   counter:"39,354",
   percent:-4,
   title:"customers",
   backgroundIcon : "#03c9d7"

  },
  {icon:<HiOutlineCube/>,
   counter:"4,354",
   percent:+23,
   title:"products",
   backgroundIcon : "#fec90f"

  },
  {icon:<BsFillBarChartLineFill/>,
   counter:"422,354",
   percent:+38,
   title:"sales",
   backgroundIcon : "#00c292"

  },
  {icon:<RiRefund2Fill/>,
   counter:"39,354",
   percent:-12,
   title:"refunds",
   backgroundIcon : "#e46a76"

  },
]


//charts ------------------- 
export const LineChartsData = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
  
]

export const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
export const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];

export const dataArea = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

// table latest trtensaction 
export const LatestTransactionData = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    online: true,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    online: false,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    online: true,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    online: false,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    online: true,
    method: "Online",
    status: "Pending",
  },
];