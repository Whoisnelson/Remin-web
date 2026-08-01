import FeaturesList from "../utils/features-list";

export default function Features () {
    return (
        <>
        <section className="w-screen pt-3 pb-5 features">
            <div className="flex flex-col items-center text-center pb-20">
            <h2 className={"font-bold text-[30px] text-gray-600 pb-3"}>.Features</h2> 
            <p className="text-[0.6em] lg:max-w-[600] md:text-[0.9em] text-gray-800">Every feature in Remin is designed to solve a real challenge creators face-from finding the right people to collaborate with, to capturing ideas before they're forgotten, and stayinf consistent long enough to grow.</p>
            </div>
          <FeaturesList image="/ss1.png" titlei="Find Your Next Collaboration" titleii="Discover creators across every platform and niche, Build meaningful connections, collaborate on content, and find people who share your passion."/>
          <FeaturesList image="/ss2.png" titlei="Create With AI" titleii="Turn your ideas into engaging content in seconds. Generate hooks, scripts, and titles whenever you need inspiration."/>
          <FeaturesList image="/ss3.png" titlei="Capture Every Idea" titleii="Never lose a great idea again. Record your thoughts on the go and let Remin convert them into text automatically."/>
          <FeaturesList image="/ss4.png" titlei="Build Consistency" titleii="Build lasting creative habits with a simple daily tracker. Small consistent actions lead to long-term growth."/>
          <FeaturesList image="/ss5.png" titlei="Grow Together" titleii="Join a community of creators who share ideas, support one another, and grow together through meaningful conversations."/>
          {/* <FeaturesList image="/ss1.png" titlei="Never Lose Inspiration" titleii="Store all your ideas in one place and revisit them whenever inspiration strikes. Your next great piece of content is always within reach."/> */}
        </section>
        </>
    )
}
