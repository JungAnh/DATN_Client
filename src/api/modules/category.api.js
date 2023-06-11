export const Category = [
  {
    id: 1,
    title: "Trang chủ",
    bannerTittle:"công nghệ thông tin",
    path:"/"
  },
  {
    id: 2,
    title: "Giới thiệu",
    bannerTittle:"giới thiệu",
    path:"/introduce"
  },
  {
    id: 3,
    title: "Diễn đàn",
    bannerTittle:"diễn đàn",
    path:"/forum"
  },
  {
    id: 4,
    title: "Hoạt Động",
    bannerTittle:"hoạt động",
    path:"/activities"
  },
  {
    id: 5,
    title: "Thành Viên",
    bannerTittle:"thành viên",
    path:"/member",
    drop:[
      {
        title: "Đăng nhập",
        path: "/signin",
      },
      {
        title: "Đăng ký",
        path: "/signup",
      },
    ],
    drop2: [
      {
        title: "Thông tin tài khoản",
        path: "/thong-tin-ca-nhan",
      },
      {
        title: "Đăng xuất",
        path: "/",
      },
    ],
  },
]