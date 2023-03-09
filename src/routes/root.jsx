import { Outlet, NavLink, useNavigation } from "react-router-dom";
import { useRef, useEffect, useState} from "react";
import { BsGithub, BsLinkedin, BsEnvelopeFill, BsList} from 'react-icons/bs'
import { AnimatePresence, easeInOut, motion, useAnimationControls } from 'framer-motion'

export default function Root({ screenWidth }) {
	const navigation = useNavigation();
    const containerRef = useRef()

    const [width, setWidth] = useState(null)

    const [open, setOpen] = useState(false)

    const menuVariants = {
        opened: {
            top: 0,
            transition: {
                when: 'beforeChildren',
                type: 'spring',
                duration: 0.5,
                staggerChildren: 0.2,
            },
            // opacity: 1,
        },
        closed: {
            top: "-90vh",
        }
    }

    const linkVariants = {
        opened: {
            opacity: 1,
        },
        closed: {
            opacity: 0,
        }
    }
    const toggleOpen = () => {
        setOpen(!open)
    }
    useEffect(() => {
        // console.log(containerRef.current.clientWidth)
        setWidth(containerRef.current.clientWidth)
    }, [])

	return (
		<>  
            <div id='menu' >
                <button className="menuBtn" onClick={toggleOpen}>
                    <BsList color="aliceblue" size={32}/>
                </button>
                {/* <div className={open ? "navbar" : "navbarclosed"}></div> */}
                <AnimatePresence>
                <motion.nav
                    className="navbar"
                    layout
                    initial={false}
                    variants={menuVariants}
                    animate={open ? "opened" : "closed"}
                    // animate={}
                >
                    <motion.a variants={linkVariants} className="link" >Home</motion.a >
                    <motion.a variants={linkVariants} className="link">About</motion.a >
                    <motion.a variants={linkVariants} className="link">Resume</motion.a >
                    <motion.a variants={linkVariants} className="link">Other</motion.a >
                </motion.nav>
                </AnimatePresence>
            </div>
			<div className="columnContainer" ref={containerRef}>
				<div id="sidebar">
					{/* <h2>Routes</h2> */}
					<nav>
						<ul>
                            <li>
								<NavLink
									to={`/`}
									className={({ isActive, isPending }) =>
										isActive
											? "active"
											: isPending
											? "pending"
											: ""
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to={`about`}
									className={({ isActive, isPending }) =>
										isActive
											? "active"
											: isPending
											? "pending"
											: ""
									}
								>
									About
								</NavLink>
							</li>
                            <li>
								<NavLink
									to={`experience`}
									className={({ isActive, isPending }) =>
										isActive
											? "active"
											: isPending
											? "pending"
											: ""
									}
								>
									Experience
								</NavLink>
							</li>
							{/* <li>
								<NavLink
									to={`projects`}
									className={({ isActive, isPending }) =>
										isActive
											? "active"
											: isPending
											? "pending"
											: ""
									}
								>
									Projects
								</NavLink>
							</li> */}
						
							<li>
								<NavLink
									to={`art`}
									className={({ isActive, isPending }) =>
										isActive
											? "active"
											: isPending
											? "pending"
											: ""
									}
								>
									Art
								</NavLink>
							</li>
                            <li>
								<NavLink
									to={`resume`}
									className={({ isActive, isPending }) =>
										isActive
											? "active"
											: isPending
											? "pending"
											: ""
									}
								>
									Resume
								</NavLink>
							</li>
                        </ul>
					</nav>
				</div>
				<div className="secondColumn">
					{/* <h2>Links</h2> */}
                    <div>
                        <a href="https://github.com/martinwoo7">
                            <BsGithub size={30} className="icon"/>
                        </a>
                        
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/martin-woo-21770b141/">
                        <BsLinkedin size={30} className="icon"/>
                        </a>
                    </div>
                    <div>
                        <a href="mailto:martinwooo@outlook.com">
                            <BsEnvelopeFill size={30} className="icon"/>
                        </a>
                    </div>
				</div>
			</div>
			<div
				id="content"
                layout
                transition={{type: "spring"}}
				className={navigation.state === "loading" ? "loading" : ""}
                style={screenWidth > 640 ? {paddingRight: width } : {paddingRight: 0}}
			>
				<Outlet />
			</div>
		</>
	);
}
