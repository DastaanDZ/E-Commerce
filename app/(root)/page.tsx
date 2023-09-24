"use client"

import { Modal } from "@/components/ui/modal";
import { useStoreModalStore } from "@/hooks/use-store-modal";
import { useEffect } from "react";

// import { Button } from '@/components/ui/button'
// import { UserButton } from '@clerk/nextjs';
// import Image from 'next/image'

const SetupPage = () => {
  const onOpen = useStoreModalStore((state) => state.onOpen);
  const isOpen = useStoreModalStore((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <>
    <div>
        {/* <Button size="sm" variant="destructive">Click ME</Button> */}
        {/* <UserButton afterSignOutUrl='/'/>
        <p>This is a protected route</p> */}
        {/* <Modal title="test" description="Test Desc" isOpen={true} onClose={() => {}}>
          Children
        </Modal> */}
        Root Page
    </div>
    </>
  )
};

export default SetupPage;
