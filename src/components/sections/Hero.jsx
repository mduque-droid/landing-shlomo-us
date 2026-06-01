import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Button from '../atomic/Button';
import Badge from '../atomic/Badge';
import AnimatedGalaxyBackground from '../shared/AnimatedGalaxyBackground';

const Hero = ({ data, onPrimaryClick, onSecondaryClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-slate-950">
      <AnimatedGalaxyBackground />
      <Container>
        <motion.div
          className="relative max-w-3xl mx-auto text-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge color="amber" className="mb-6 inline-block">
              {data.badge}
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg"
            style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.6)' }}
          >
            {data.title}
            <span className="text-cyan-400"> {data.titleHighlight}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow"
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}
          >
            {data.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onPrimaryClick}>
              {data.cta.primary}
            </Button>
            <Button size="lg" variant="secondary" onClick={onSecondaryClick}>
              {data.cta.secondary}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
