// components/GameProjectModal.js
import { Modal } from '@heroui/react'

const GameProjectModal = ({ isOpen, onOpenChange, media, title }) => {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            size="2xl"
            classNames={{
                base: 'bg-background',
                header: '',
                body: 'text-secondary-foreground',
                closeButton: 'hover:bg-secondary text-secondary-foreground',
            }}
        >
            <Modal.Container>
                {(onClose) => (
                    <>
                        <Modal.Header>{title}</Modal.Header>
                        <Modal.Body>
                            <div className="aspect-video w-full">
                                {media.type === 'video' ? (
                                    <video
                                        src={media.url}
                                        controls
                                        className="h-full w-full rounded-lg"
                                    />
                                ) : (
                                    <img
                                        src={media.url}
                                        alt={title}
                                        className="h-full w-full rounded-lg object-contain"
                                    />
                                )}
                            </div>
                        </Modal.Body>
                    </>
                )}
            </Modal.Container>
        </Modal>
    )
}

export default GameProjectModal
