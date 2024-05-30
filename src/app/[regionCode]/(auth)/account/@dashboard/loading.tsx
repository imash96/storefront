import Spinner from "@icons/spinner";

export default function Loading() {
    return (
        <div className="flex items-center justify-center w-full h-full text-grey-81">
            <Spinner size={36} />
        </div>
    )
}