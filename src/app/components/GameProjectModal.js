// components/GameProjectModal.js
import { Modal, ModalBackdrop } from '@heroui/react'
import { useEffect } from 'react'
import Image from 'next/image'

const GameProjectModal = ({
    media = {},
    title,
    isOpen = false,
    onOpenChange = () => {},
}) => {
    useEffect(() => {
        console.log('modal is open', isOpen)
    }, [isOpen])

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            size="2xl"
            classnames
            classNames={{
                body: '',
                closeButton: 'hover:bg-secondary text-secondary-foreground',
            }}
        >
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="border-4 border-primary/40 bg-secondary my-auto">
                        <Modal.CloseTrigger className="border-3 border-primary text-primary" />

                        {/* Title */}
                        <Modal.Header>
                            <Modal.Heading className="font-bold">
                                {title}
                            </Modal.Heading>
                        </Modal.Header>
                        {/* Media content */}
                        <Modal.Body>
                            <div className="relative aspect-video w-full">
                                {media.type === 'video' ? (
                                    <video
                                        src={media.url}
                                        controls
                                        className="h-full w-full rounded-lg"
                                    />
                                ) : (
                                    <Image
                                        src={media.url}
                                        alt={title}
                                        fill
                                        className="m-auto !h-max !w-max rounded-lg border-3 border-primary/20 object-contain"
                                    />
                                )}
                            </div>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}

export default GameProjectModal
