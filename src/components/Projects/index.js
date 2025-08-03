import './Projects.css';

const Projects = () => {
    return (
        <>
            <div id='Projects' className="Projects">
                <h1 className="h1-projects">OUR PROJECTS</h1>
                
                        <p className="Projects_text">The ocean is a vast and complex ecosystem that covers more than 70% of the Earth's surface.
                            It plays a critical role in maintaining the planet's climate balance, producing over half of the world's oxygen,
                            and supporting an extraordinary diversity of marine life. Beyond its environmental importance, the ocean is also vital to human livelihoods,
                            providing food, jobs, and recreational opportunities for billions of people across the globe.
                            However, in recent decades, the ocean has come under increasing threat from human activities. Pollution, overfishing, climate change,
                            and habitat destruction have led to a dramatic decline in marine biodiversity and overall ocean health. In response to these challenges,
                            a growing number of organizations, governments, and communities have launched initiatives aimed at protecting and restoring marine environments.
                            Ocean preservation projects range from coral reef restoration and marine protected areas to plastic cleanup efforts and sustainable fishing programs.
                            These initiatives are essential not only for safeguarding the future of marine ecosystems, but also for promoting awareness, education, 
                            and global cooperation. By investing in the health of our oceans today, we are taking a crucial step toward ensuring a more sustainable and balanced world for future generations.
                        </p>
            </div>
            <section className="Projects_container">
                    <div className="Card_projects">
                        <img src="/imagem/arraia.png" alt="arraia"/>
                        <div>
                            <h2 className='subtitulo_projects'>Graceful Creatures at Risk in Tropical Waters</h2>
                            <p className="Card_txt">
                                Rays are elegant, unique marine animals that play an important role in the balance of ocean ecosystems. Yet, they are increasingly threatened by accidental fishing, habitat loss, unregulated tourism, and illegal trade. Many ray species are now endangered.

                                Conservation efforts focus on protecting coastal areas where rays feed and breed, promoting responsible tourism, and educating fishers on techniques to avoid accidental capture. Scientific tracking and satellite tagging projects help researchers better understand their behavior and migration. The protection of rays is a perfect example of how science and conservation can work together to preserve ocean harmony.reness campaigns. Preserving rays is not just about saving individual species — it's about maintaining the health and balance of entire marine ecosystems.
                            </p>
                        </div>
                    </div>

                    <div className="Card_projects">
                        <img src="/imagem/foca.jpg" alt="foca" />
                        <div>
                            <h2 className='subtitulo_projects'>Seal Conservation: Guardians of Cold Waters</h2>
                            <p className="Card_txt">
                                Seals are vital marine mammals that help maintain the ecological balance of ocean ecosystems, especially in polar and cold coastal regions. Sadly, they face numerous threats including overfishing, plastic pollution, climate change, and habitat loss. Conservation projects around the world are focusing on protecting breeding areas, monitoring populations, and promoting environmental education.

                                Organizations work closely with local communities to reduce boat collisions, control overfishing, and prevent bycatch. Public awareness is a key part of these efforts—preserving seals means preserving the health of our oceans. Every rescued seal is a step toward more vibrant and sustainable marine life.
                            </p>
                        </div>
                    </div>

                    <div className="Card_projects">
                        <img src="/imagem/corais.jpg" alt="corais" />
                        <div>
                            <h2 className='subtitulo_projects'>Coral Reefs: Living Cities Beneath the Sea</h2>
                            <p className="Card_txt">
                                Coral reefs are among the most diverse and important ecosystems on the planet. They provide shelter for thousands of marine species, protect coastlines from erosion, and support fishing and tourism industries for millions of people. Unfortunately, they are also among the most endangered environments due to global warming, ocean acidification, pollution, and physical destruction.

                                Coral preservation projects include active restoration through the transplantation of healthy fragments, creation of artificial reefs, and enforcement of marine protection laws. Reducing plastic and chemical runoff into the oceans is also critical. Protecting coral reefs means defending a rich and vibrant underwater world—and safeguarding the marine life that depends on it, including ourselves.
                            </p>
                        </div>
                    </div>

                    <div className="Card_projects">
                        <img src="/imagem/tartaruga.jpg" alt="tartaruga" />
                        <div>
                            <h2 className='subtitulo_projects'>Sea Turtles: Ancient Survivors of the Ocean</h2>
                            <p className="Card_txt">
                                Sea turtles are among the most ancient creatures on Earth, but today they are racing against time to survive. Threats like plastic pollution, entanglement in fishing gear, illegal poaching, and the destruction of nesting beaches have pushed six of the seven known sea turtle species to the brink of extinction.

                                Fortunately, many global initiatives are working to protect them. These include beach monitoring, nest protection, hatchling releases, marine protected areas, and public campaigns to reduce plastic use. Engaging coastal communities and volunteers is essential to these efforts. The fight to save sea turtles is also a fight for cleaner, healthier oceans for all marine life. a healthier, more balanced ocean environment.
                            </p>
                        </div>
                    </div>
            </section>
        </>
    )
    
}

export default Projects