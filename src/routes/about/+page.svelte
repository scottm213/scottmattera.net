<script>
    import Tabs from "../tabs.svelte";
    import MediaQuery from "../MediaQuery.svelte";
    import MobileTabs from "../mobileTabs.svelte";
</script>

<title>Scott's Site - About Me</title>

<MediaQuery query="(min-width: 758px)" let:matches>
    {#if matches}
    <div class="test">

    <Tabs />
    <header> <h2>About Me</h2> </header>
    <div class = "flex flex-row">
        <div class = "square"> </div>
        <div class = "otherSquare bg-[#004281]  ">
            <p>Hello! I am Scott Mattera, a student at UNCW majoring in Computer Science <br> with a
                concentration in cybersecurity.</p> <br> <br>
            <p>I will be graduating in May, 2026. <br>
            I have programmed with Java, Python, Typescript, Ionic React, Tailwind, HTML/CSS, Swift, MySQL, C++, and Verse. <br>
            I have used programs including Webstorm, IntelliJay, VSCode, Github/Git, XCode, <br>
            POV-Ray, UEFN, and Microsoft 365
            I use both MacOS and Windows, with some light experience using server based linux.</p>
            <h2 class="underline font-bold">My Relevant Classwork</h2>
            <ul class="list-disc pl-6">
                <li>Introduction To Computer Science</li>
                <li>Design & Analysis Of Algorithms</li>
                <li>Introduction to Data Structures</li>
                <li>Discrete Math Principles</li>
                <li>Object Oriented Programming & Design</li>
                <li>Professional & Ethical Issues in Computing</li>
                <li>Computer Networks</li>
                <li>Software Engineering</li>
                <li>Computer Graphics</li>
                <li>Database Design & Implementation</li>
                <li>Computer Organization</li>
                <li>Formal Languages & Computability</li>
                <li>Programming Languages</li>
                <li>Fundamentals of Cybersecurity</li>
                <li>Systems Security</li>
                <li>Cyber Operations</li>
                <li>Malware Analysis</li>
                <li>Applied Software Security</li>
                <li>Security Tools Engineering</li>

            </ul>
        </div>
    </div>
    </div>
        {/if}
</MediaQuery>

<MediaQuery query="(max-width: 758px)" let:matches>
    {#if matches}
        <header class="flex rounded-t-[15px]"> <h2>Scott's Website</h2> </header>
        <MobileTabs></MobileTabs>
        <div class="bg-[#004281] flex flex-col items-center justify-center">
            <p>Hello! I am Scott Mattera, a student at UNCW majoring in Computer Science <br> with a
                concentration in cybersecurity.</p> <br> <br>
            <p>I will be graduating in May, 2026. <br>
                I have programmed with Java, Python, Typescript, Ionic React, Tailwind, HTML/CSS, Swift, MySQL, C++, and Verse. <br>
                I have used programs including Webstorm, IntelliJay, VSCode, Github/Git, XCode, <br>
                POV-Ray, UEFN, and Microsoft 365
                I use both MacOS and Windows, with some light experience using server based linux.</p>
            <h2 class="underline font-bold">My Relevant Classwork</h2>
            <ul class="list-disc pl-6">
                <li>Introduction To Computer Science</li>
                <li>Design & Analysis Of Algorithms</li>
                <li>Introduction to Data Structures</li>
                <li>Discrete Math Principles</li>
                <li>Object Oriented Programming & Design</li>
                <li>Professional & Ethical Issues in Computing</li>
                <li>Computer Networks</li>
                <li>Software Engineering</li>
                <li>Computer Graphics</li>
                <li>Database Design & Implementation</li>
                <li>Computer Organization</li>
                <li>Formal Languages & Computability</li>
                <li>Programming Languages</li>
                <li>Fundamentals of Cybersecurity</li>
                <li>Systems Security</li>
                <li>Cyber Operations</li>
                <li>Malware Analysis</li>
                <li>Applied Software Security</li>
                <li>Security Tools Engineering</li>
            </ul>


        </div>
    {/if}
</MediaQuery>