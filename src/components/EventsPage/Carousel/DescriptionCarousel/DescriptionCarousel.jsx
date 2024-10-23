import { motion, AnimatePresence } from 'framer-motion';
import DetailsCard from '../../CardComponents/DetailsCard';
import tw, { styled } from 'twin.macro';
import { memo } from 'react';


const DescriptionContainer = styled.div`
  ${tw`w-full mt-8 mb-20 h-auto relative`};
`;

const DescriptionSlide = styled(motion.div)`
  ${tw`w-full`};
`;

const slideVariants = {
  enter: { x: 50, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
};

const MemoizedDetailsCard = memo(DetailsCard);

const DescriptionCarousel = ({ currentIndex, descriptionItems }) => {
  return (
    <DescriptionContainer>
      <AnimatePresence mode='wait'>
        <DescriptionSlide
          key={currentIndex}
          variants={slideVariants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{ duration: 0.5 }}
        >
          <MemoizedDetailsCard {...descriptionItems[currentIndex]} />
        </DescriptionSlide>
      </AnimatePresence>
    </DescriptionContainer>
  );
};

export default DescriptionCarousel;

const DescriptionContainer = styled.div`
  ${tw`w-full mt-8 mb-20 h-auto relative`};
`;

const DescriptionSlide = styled(motion.div)`
  ${tw`w-full`};
`;
