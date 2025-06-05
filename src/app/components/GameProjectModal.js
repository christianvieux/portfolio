// components/GameProjectModal.js
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
  } from "@heroui/react";
  
  const GameProjectModal = ({ isOpen, onOpenChange, media, title }) => {
    return (
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        size="2xl"
        classNames={{
          base: "bg-background",
          header: "",
          body: "text-secondary-foreground",
          closeButton: "hover:bg-secondary text-secondary-foreground"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{title}</ModalHeader>
              <ModalBody>
                <div className="aspect-video w-full">
                  {media.type === "video" ? (
                    <video 
                      src={media.url}
                      controls
                      className="w-full h-full rounded-lg"
                    />
                  ) : (
                    <img
                      src={media.url}
                      alt={title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  )}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  };
  
  export default GameProjectModal;