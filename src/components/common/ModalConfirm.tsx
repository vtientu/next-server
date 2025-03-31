import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { memo } from "react";

const DEFAULT_PROPS = {
  buttonOpenLabel: "Mở",
  title: "Bạn có chắc chắn muốn xóa không?",
  description:
    "Không thể hoàn tác hành động này. Bạn hãy chắc trước khi thao tác xác nhận.",
  buttonCancelLabel: "Đóng",
  buttonConfirmLabel: "Xác nhận",
};

const ModalConfirm = ({
  buttonOpenLabel = DEFAULT_PROPS.buttonOpenLabel,
  title = DEFAULT_PROPS.title,
  description = DEFAULT_PROPS.description,
  buttonCancelLabel = DEFAULT_PROPS.buttonCancelLabel,
  buttonConfirmLabel = DEFAULT_PROPS.buttonConfirmLabel,
}: ModalConfirmProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{buttonOpenLabel}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{buttonCancelLabel}</AlertDialogCancel>
          <AlertDialogAction>{buttonConfirmLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default memo(ModalConfirm);

export interface ModalConfirmProps {
  buttonOpenLabel: string;
  title: string;
  description?: string;
  buttonCancelLabel: string;
  buttonConfirmLabel: string;
}
