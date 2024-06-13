import StarIcon from "@/icons/star";

const product = {
    rating: 3.9,
    ratingCount: 512,
}

export default function ProductRating() {

    return (
        <div className="flex sm:mt-0 text-text-disable">
            <h2 className="sr-only">Ratings</h2>
            <div className="inline-flex items-center gap-x-1">
                {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon key={rating} color={`${product.rating > rating ? '#ffdc37' : 'currentColor'}`} className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                ))}
            </div>
            <p className="text-sm ml-3 my-auto inline-block align-middle text-text-active-h">
                {product.ratingCount}
                <span className="sr-only"> out of 5 stars</span>
                <span> Ratings</span>
            </p>
        </div>
    )

}