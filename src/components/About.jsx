import { styles } from "../styles"
import { motion } from 'framer-motion'
import { textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { useMediaQuery } from 'react-responsive'

const About = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 680px)' })
    const isNotMobile = useMediaQuery({ query: '(min-width: 681px)' })

    return (
        <>
            
            <motion.div variants={textVariant()} className="mt-20">
                <h2 className={styles.sectionHeadText}>Introduction</h2>
                <p className={styles.sectionSubText}>Hi, I'm Lauren Fleming</p>
            </motion.div>
            


            <motion.p
                className="mt-4 text-text text-[17px] max-w-3xl leading-[30px]"
            >
                Graduate of Computer Science with experience in Full Stack Development. Looking for a role where I can grow and learn from experienced team members while drawing on project experience I have already successfully executed.
            </motion.p>

        </>
    )
}

export default SectionWrapper(About, "about")