"use client";
import  * as z from "zod"
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

const formSchema  = z.object({

})
export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
    <Modal
    title="Create a New Store"
    description="Add a new store!"
    isOpen= {storeModal.isOpen}
    onClose={storeModal.onClose}>
        Future Create Store Form
    </Modal>
    );
};