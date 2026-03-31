import { Button } from "@/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/ui/dialog";
import { Icon } from "@/ui/icon";

import { AddProductForm } from "./add-product-form";
import { IProduct } from "@/api/responses";
import { useState } from "react";

export const AddProductDropdown = ({
  addClientProduct,
}: {
  addClientProduct: (product: IProduct) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="primary" size="sm">
          <Icon name="circle-plus" size={22} />
          {"Добавить"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogTitle className="text-center font-semibold text-2xl leading-[110%] text-grey-900">
          {"Добавить товар"}
        </DialogTitle>
        <AddProductForm
          addClientProduct={addClientProduct}
          onClose={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
};
