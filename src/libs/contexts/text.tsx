import useToggleState from "@libs/hooks/use-toggle-state";
import Button from "@modules/common/button";
import Modal from "@modules/common/modal";

export type StateType = {
    state: boolean
    open: () => void
    close: () => void
}

export default function SizeChart({ state, open, close }: StateType) {
    return (
        <Modal show={state} close={close} data-testid="add-address-modal">
            <Modal.Title close={close}>
                <h1 className="mb-2">Add address</h1>
            </Modal.Title>
            <Modal.Body>
                <div>Modal</div>
            </Modal.Body>
            <Modal.Footer>
                <div className="flex gap-3 mt-6">
                    <Button isLoading={false} type="reset" variant="secondary" onClick={close} className="h-10">
                        Cancel
                    </Button>
                    <Button isLoading={false}>Save</Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}