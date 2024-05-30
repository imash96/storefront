export default function ErrorMessage({ error }: { error?: string | null }) {
    return (
        <div className="pt-2 text-red-1 text-xs leading-5 font-normal">
            <span>{error}</span>
        </div>
    )
}
