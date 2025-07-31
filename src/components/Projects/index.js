import './Projects.css';

const Projects = () => {
    return (
        <>
            <div id='Projects' className="Projects">
                <h1 className="h1-projects">OUR PROJECTS</h1>
                
                        <p className="Projects_text">The ocean is a vast and complex ecosystem that covers more than 70% of the Earth’s surface.
                            It plays a critical role in maintaining the planet’s climate balance, producing over half of the world’s oxygen,
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
                        <p className="Card_txt">
                            Rays are graceful and fascinating creatures that glide silently through the ocean,
                            often unnoticed by the public. Despite their beauty and ecological importance,
                            many species of rays are now endangered due to overfishing, habitat destruction,
                            and accidental capture in fishing gear. Rays, such as the manta ray and the sawfish,
                            are slow to reproduce, making their populations especially vulnerable. Conservation projects
                            round the world are working to protect these species through research, marine protected areas,
                             and public awareness campaigns. Preserving rays is not just about saving individual species — it's about maintaining the health and balance of entire marine ecosystems.
                        </p>
                    </div>

                    <div className="Card_projects">
                        <img src="/imagem/foca.jpg" alt="foca" />
                        <p className="Card_txt">
                            Seals are intelligent and playful marine mammals that inhabit coastal waters across the globe.
                            Unfortunately, several species of seals are facing the risk of extinction due to climate change,
                            loss of sea ice, pollution, and human disturbances. Species such as the Mediterranean monk seal 
                            and the Hawaiian monk seal are critically endangered, with only a few hundred individuals remaining in the wild. 
                            Conservation programs aim to protect seal habitats, monitor populations, and reduce threats from fishing and marine debris.
                            Saving seals is part of a broader effort to preserve the health of our oceans and the balance of marine food chains.
                        </p>
                    </div>

                    <div className="Card_projects">
                        <img src="/imagem/corais.jpg" alt="corais" />
                        <p className="Card_txt">
                            Coral reefs are among the most biodiverse ecosystems on Earth, often referred to as the "rainforests of the sea."
                            They provide shelter and food for countless marine species and protect coastlines from erosion and storms. However
                            coral reefs are under severe threat from climate change, ocean acidification, pollution, and destructive fishing practices.
                            Bleaching events caused by rising sea temperatures have already damaged large sections of reefs around the world. Conservation
                            efforts include coral farming, restoration projects, and reducing human impacts on marine environments. Protecting 
                            coral reefs is vital to sustaining marine life and the communities that depend on them.
                        </p>
                    </div>

                    <div className="Card_projects">
                        <img src="/imagem/tartaruga.jpg" alt="tartaruga" />
                        <p className="Card_txt">
                            Sea turtles have roamed the oceans for over 100 million years, but today, nearly all seven species are considered endangered or threatened.
                            Their decline is caused by a range of human-related threats, including poaching, plastic pollution, coastal development,
                            and accidental capture in fishing nets. Additionally, climate change is affecting turtle nesting sites and hatchling survival
                            . Conservation efforts around the world, such as protected nesting beaches, rescue centers, and community education, 
                            are crucial to reversing the decline of these ancient mariners. Protecting sea turtles helps preserve marine biodiversity 
                            and promotes a healthier, more balanced ocean environment.
                        </p>
                    </div>
            </section>
        </>
    )
    
}

export default Projects