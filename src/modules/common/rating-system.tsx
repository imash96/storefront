import StarIcon from '@icons/star'

interface RatingProps {
    rating: number
}

const RatingSystem = ({ rating }: RatingProps) => {

    return (
        <div className='rating flex gap-x-0.5 text-grey-88'>
            {[1, 2, 3, 4, 5].map((index) => (
                <StarIcon key={index} width={14} color={index < rating ? '#ffdc37' : 'currentColor'} />
            ))}
        </div>
    );
}

export default RatingSystem;