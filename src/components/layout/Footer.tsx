import { Container } from "@/components/common/container-width";
import { ImageRatio } from "@/components/common/image-ratio";
import { ImageConstants } from "@/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-foreground pt-10 pb-5 text-background">
      <Container className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 px-4">
          <h3 className="text-lg py-3">HỘ KINH DOANH TU</h3>
          <p className="text-sm">
            Địa chỉ: 123 Đường Nguyễn Tất Thành, Quận 1, Hồ Chí Minh
          </p>
          <p className="text-sm mb-3">Điện thoại: 0909090909</p>
          <ImageRatio
            src={ImageConstants.FOOTER_IMAGE}
            alt="Footer image"
            className="aspect-[2.5] max-w-[70%]"
            imageProps={{
              className: "object-contain",
            }}
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-2 px-4">
          <h3 className="text-lg py-3">THÔNG TIN</h3>
          <ul className="text-sm">
            <li className="h-8 flex items-center gap-1">
              <ChevronRight width={15} />
              <Link className="hover:underline" href="/">
                Trang chủ
              </Link>
            </li>
            <li className="h-8 flex items-center gap-1">
              <ChevronRight width={15} />
              <Link className="hover:underline" href="/">
                Giới thiệu
              </Link>
            </li>
            <li className="h-8 flex items-center gap-1">
              <ChevronRight width={15} />
              <Link className="hover:underline" href="/">
                Sản phẩm
              </Link>
            </li>
            <li className="h-8 flex items-center gap-1">
              <ChevronRight width={15} />
              <Link className="hover:underline" href="/">
                Khuyến mãi
              </Link>
            </li>
            <li className="h-8 flex items-center gap-1">
              <ChevronRight width={15} />
              <Link className="hover:underline" href="/">
                Tin tức
              </Link>
            </li>
            <li className="h-8 flex items-center gap-1">
              <ChevronRight width={15} />
              <Link className="hover:underline" href="/">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 px-4">
          <h3 className="text-lg py-3">HƯỚNG DẪN & CHÍNH SÁCH</h3>
          <ul className="text-sm">
            <li className="h-8 flex items-center gap-1">
              <ChevronRight width={15} />
              <Link className="hover:underline" href="/">
                Hướng dẫn mua hàng
              </Link>
            </li>
            <li className="h-8 flex items-center gap-1">
              <ChevronRight width={15} />
              <Link className="hover:underline" href="/">
                Thẻ Thành Viên
              </Link>
            </li>
            <li className="h-8 flex items-center gap-1">
              <ChevronRight width={15} />
              <Link className="hover:underline" href="/">
                Chính sách đổi trả & hoàn tiền
              </Link>
            </li>
            <li className="h-8 flex items-center gap-1">
              <ChevronRight width={15} />
              <Link className="hover:underline" href="/">
                Chính sách thanh toán
              </Link>
            </li>
            <li className="h-8 flex items-center gap-1">
              <ChevronRight width={15} />
              <Link className="hover:underline" href="/">
                Chính sách vận chuyển
              </Link>
            </li>
            <li className="h-8 flex items-center gap-1">
              <ChevronRight width={15} />
              <Link className="hover:underline" href="/">
                Chính sách bảo mật
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 px-4">
          <h3 className="text-lg py-3 uppercase">
            Giấy chứng nhận đăng kí kinh doanh số 01E8026928 do UBND quận Đống
            Đa cấp ngày 21/11/2018
          </h3>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
