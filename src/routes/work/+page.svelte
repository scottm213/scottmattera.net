<script lang="ts">
    import Tabs from "../tabs.svelte";
    import MediaQuery from "../MediaQuery.svelte";
    import MobileTabs from "../mobileTabs.svelte";

    let schoolWorkOpen = $state(false);
    let personalWorkOpen = $state(false);


    let buttonStyle1 = $state("bg-[#003468] hover:bg-[#004381]");
    let buttonStyle2 = $state("bg-[#003468] hover:bg-[#004381]");
    function schoolButtonClicked(){
        if (personalWorkOpen){
            personalWorkOpen = !personalWorkOpen;

        }
        if (schoolWorkOpen){
            buttonStyle1 = "bg-[#003468] hover:bg-[#004381]";
        }else {
            buttonStyle1 = "bg-[#003468] border-4 border-blue-600 hover:bg-[#003b73]";
        }
        schoolWorkOpen = !schoolWorkOpen;
        buttonStyle2 = "bg-[#003468] hover:bg-[#004381]";


    }

    function personalButtonClicked(){
        if (schoolWorkOpen) {
            schoolWorkOpen = !schoolWorkOpen;
        } if (personalWorkOpen) {
            buttonStyle2 = "bg-[#003468] hover:bg-[#004381]";
        }else {
            buttonStyle2 = "bg-[#003468] hover:bg-[#003b73] border-4 border-blue-600 ";
        }
        personalWorkOpen = !personalWorkOpen;
        buttonStyle1 = "bg-[#003468] hover:bg-[#004381]";

    }


</script>

<title>Scott's Site - My Work</title>

<MediaQuery query="(min-width: 758px)" let:matches>
    {#if matches}
    <div class ="test"> </div>
    <Tabs />
    <header class="flex"> <a href="/"><img src="image/logo.png" alt="my logo" class="h-16 w-16 mr-2 border-3 border-transparent hover:border-black transition"></a> <h2 class="p-1">My Work</h2> </header>
    <div class = "flex flex-row">
        <div class = "square flex flex-col items-start justify-start">
            <div class="grid grid-cols-4 gap-1 ">

                <button  class = "flex shrink-1 flex-col w-33.5 h-10 {buttonStyle1} rounded-tl-lg rounded-br-lg mt-20 col-start-3 col-end-4" type="button" value="school" onclick={schoolButtonClicked}>School Projects</button>


                <button class = "flex shrink-1 flex-col w-33.5 h-10 {buttonStyle2} rounded-tl-lg rounded-br-lg hover:bg-[#004381] mt-50 col-start-3 col-end-4" type="button" value="personal" onclick={personalButtonClicked}>Personal Projects</button>
            </div>
        </div>
            <div>
                <br>
                <br>
                <br>
                {#if schoolWorkOpen}

                    <div class = "workSquare overflow-y-scroll flex flex-col">
                        <h1 class ="font-bold">School Projects</h1>
                        <div class="flex items-center gap-2">
                            <a href="/demos/invaders" ><img src="/image/galaga.png" class="fumo w-10 h-10 " alt="fumo"></a> <p class = "font-bold">Galaga Clone</p>
                        </div>
                        <ul class="list-disc pl-6">
                            <li>Made using Java, Java FX </li>
                            <li>Plays similar to Space Invaders</li>
                            <li>Made with a team</li>
                        </ul>
                        <p class = "font-bold">Munch Match </p>
                        <ul class="list-disc pl-6">
                            <li>Made using Ionic, React, Typescript,Express, MySQL </li>
                            <li>App similar to tinder, but for finding restaurants</li>
                            <li>Project had us take the position of a development team, where we had scrum meetings and
                            used GitHub to to merge changes.</li>
                            <li>My focus was on the backend, made using Express (javascript)</li>
                            <li>Created a MySQL database to host all of our user data</li>
                            <li>Created ionic pages for logging in, creating accounts, making reviews, and setting preferences</li>
                            <li>Also set up a request with the Yelp API to get restaurant info near a user (location is just hardcoded, selected by user)</li>
                            <li>Passwords are hashed before being saved to database</li>
                            <li>Lots of time spent figuring out how to host the database on my Oracle Cloud server (using docker compose)</li>
                            <li>The backend itself is also hosted on my Ubuntu VPS, using a dockerfile.</li>
                        </ul>
                        <p class = "font-bold">Computer Store Site </p>
                        <ul class="list-disc pl-6">
                            <li>Simple website frontend made with HTML and PHP with a MySQL backend</li>
                            <li>Determined the requirements of a database for a Computer Parts Store</li>
                            <li>Created a MySQL database with appropriate tables for the store</li>
                            <li>Added a website that makes queries to get certain data</li>
                            <li>Uses a trigger, and function</li>
                            <li>Made with a group</li>
                        </ul>
                        <p class = "font-bold">Ghidra & IDA Pro Plugins Research</p>
                        <ul class="list-disc pl-6">
                            <li>A research paper describing different plugins to assist with <br>
                            reverse engineering and static malware analysis.</li>
                            <li>Made with a team </li>
                        </ul>
                        <p class = "font-bold">HTML Site</p>
                        <ul class="list-disc pl-6">
                            <li>HTML Website with CSS styling</li>
                            <li>Has JavaScript functionality</li>
                            <li>Made Solo</li>
                            <li>Check it out <a class="workLink" href="/classSite/index.html" target="_blank">here!</a></li>
                        </ul>
                        <p class = "font-bold">Spam Email Detector</p>
                        <ul class="list-disc pl-6">
                            <li>Spam Email Detection program made using Java</li>
                            <li>Takes an inputted email file and checks for links with invalid certificates, links that still use HTTP, and emails that have been detected as spam and hashed.  </li>
                            <li>Also uses OpenAI integration and sends the file to a LLM which decides whether or not it believes it is spam.</li>
                            <li>There is a spam likeliness score which increases/decreases based on certain conditions, in an attempt to reduce false flags.</li>
                            <li>Made with one teammate.</li>
                        </ul>

                    </div>
                {/if}

                {#if personalWorkOpen}
                    <div class = "workSquare overflow-y-scroll flex flex-col">
                        <h1 class = "font-bold">Personal Projects</h1>
                        <p class = "font-bold">SleepZone (in progress)</p>
                        <ul class="list-disc pl-6">
                        <li>Made using Swift, SwiftUI</li>
                            <li>Simple iOS app for tracking and recording the amount of hours you sleep</li>
                            <li>Uses SwiftData for persistent data tracking </li>
                            <li>Made in collaboration</li>
                        </ul>
                        <div class="flex items-center gap-2">
                            <a href="/museum" ><img src="/image/povray.png" class="fumo w-10 h-10 " alt="povray"></a><p class = "font-bold">POV-Ray Projects </p>
                        </div>
                        <ul class="list-disc pl-6">
                            <li>More of a passion project, I learned the old 3D rendering software
                            POV-Ray to make old 90s styled 3D renders</li>
                            <li>Uses POV-Ray's scene description language.</li>
                            <li>Worked with some simple graphics components, like SORs, splines, and a bit of working with textures, lighting,
                            and camera placement</li>
                            <li>Made SOLO</li>
                        </ul>
                        <p class = "font-bold">Asteroid War Minecraft Map</p>
                        <ul class="list-disc pl-6">
                       <li>Minecraft map where you take control of a spaceship's cannon,
                           shooting incoming asteroids and dealing with problems on the ship.</li>
                       <li> I worked on most of the building/design/many ideas, as well as making some
                        3D models, 2D sprites, and programming for some of the events that can happen.</li>
                            <li>Made for the Yeggs 2023 Fall MapJam, where we had only 3 days to complete it!</li>
                            <li>Won 3rd place prize! <a class = "tweet" href="https://x.com/YeggsStudios/status/1707034081102266798?s=20">[Place Announcement Tweet]</a></li>
                            <li> Made in collaboration</li>
                       </ul>
                        <p class ="font-bold">This Website</p>
                        <ul class="list-disc pl-6">
                            <li> This website is also a personal project of mine! </li>
                            <li>I learned Svelte, TypeScript and Tailwind CSS in order to make it.</li>
                            <li>Hosted with GitHub sites</li>
                            <li>Made SOLO</li>
                        </ul>
                        <div class="flex items-center gap-2">
                            <a href="/fumo" ><img src="/image/reimu.PNG" class="fumo w-10 h-10 " alt="fumo"></a> <p class ="font-bold">FumoBot (WIP)</p>
                        </div>
                        <ul class="list-disc pl-6">
                            <li>Discord bot made with Java, using Discord4J </li>
                            <li>The bot has many functions, which include:</li>
                            <li>Checking the AmiAmi website for stock status of Touhou Fumo Plushes</li>
                            <li>Display all new item's in the day's Fortnite item shop with filters for different types of items</li>
                            <li>Guessing games based on Wordle that get random characters from the Fortnite shop or Brainrot wiki. Users can get hints,
                            make a guess (which shows any letters that were in the correct position) and get points based on how many guesses they used</li>
                            <li>Has a points system that gives players points from activities, and stores them so anyone can see their total. </li>
                            <li>Has some ways to spend points, including a gacha game implemented with rarities and pity, with a feature that levels up every duplicate pulled</li>
                            <li>Uses SQlite to store information about user's points and their collected gachas</li>
                            <li>Uses the last.fm API to implement a command that searches for a last.fm user's listening history, with parameters allowing to sort by
                            all time, month, year, week, and choose between songs and albums</li>
                            <li>Uses Jsoup, Gson and other Java libraries to implement webscraping commands (searching Brainrot wiki)</li>
                            <li>Uses the Fortnite API to get shop data</li>
                            <li>Uses the AmiAmi API in a python script to search AmiAmi website</li>
                            <li>Uses gradle to build, hosted on my Ubuntu Oracle Cloud server</li>
                            <li>Made SOLO</li>
                        </ul>
                    </div>
                {/if}

        </div>
    </div>
    {/if}
</MediaQuery>


<MediaQuery query="(max-width: 758px)" let:matches>
    {#if matches}
        <header class="flex rounded-t-[15px]"> <h2>My Work</h2> </header>
        <MobileTabs></MobileTabs>
        <div class="bg-[#004281] flex flex-col items-center justify-center">
            <h1 class ="font-bold">---School Projects---</h1>
                <p class = "font-bold">Galaga Clone</p>
                <ul class="list-disc pl-6">
                    <li>Made using Java, Java FX </li>
                    <li> Plays similar to Space Invaders</li>
                    <li> Made with a team</li>
                </ul>
                <p class = "font-bold">Munch Match </p>
                <ul class="list-disc pl-6">
                    <li>Made using Ionic, React, Typescript,Express, MySQL </li>
                    <li>App similar to tinder, but for finding restaurants</li>
                    <li>Project had us take the position of a development team, where we had scrum meetings and
                        used GitHub to to merge changes.</li>
                    <li>My focus was on the backend, made using Express (javascript)</li>
                    <li>Created a MySQL database to host all of our user data</li>
                    <li>Created ionic pages for logging in, creating accounts, making reviews, and setting preferences</li>
                    <li>Also set up a request with the Yelp API to get restaurant info near a user (location is just hardcoded, selected by user)</li>
                    <li>Passwords are hashed before being saved to database</li>
                    <li>Lots of time spent figuring out how to host the database on my Oracle Cloud server (using docker compose)</li>
                    <li>The backend itself is also hosted on my Ubuntu VPS, using a dockerfile.</li>
                </ul>
                <p class = "font-bold">Computer Store Site </p>
                <ul class="list-disc pl-6">
                    <li>Simple website frontend made with HTML and PHP with a MySQL backend</li>
                    <li>Determined the requirements of a database for a Computer Parts Store</li>
                    <li>Created a MySQL database with appropriate tables for the store</li>
                    <li>Added a website that makes queries to get certain data</li>
                    <li>Uses a trigger, and function</li>
                    <li>Made with a group</li>
                </ul>
                <p class = "font-bold">Ghidra & IDA Pro Plugins Research</p>
                <ul class="list-disc pl-6">
                    <li> A research paper describing different plugins to assist with <br>
                        reverse engineering and static malware analysis.</li>
                    <li> Made with a team </li>
                </ul>
                <p class = "font-bold">HTML Site</p>
                <ul class="list-disc pl-6">
                    <li>HTML Website with CSS styling</li>
                    <li>Check it out <a class="workLink" href="/classSite/index.html" target="_blank">here!</a></li>
                </ul>




                <h1 class = "font-bold">---Personal Projects---</h1>
                <p class = "font-bold">SleepZone (in progress)</p>
                <ul class="list-disc pl-6">
                    <li>Made using Swift, SwiftUI</li>
                    <li>Simple iOS app for tracking and recording the amount of hours you sleep</li>
                    <li>Uses SwiftData for persistent data tracking </li>
                    <li>Made in collaboration</li>
                </ul>
                <div class="flex items-center gap-2">
                    <a href="/museum" ><img src="/image/povray.png" class="fumo w-10 h-10 " alt="povray"></a><p class = "font-bold">POV-Ray Projects </p>
                </div>
                <ul class="list-disc pl-6">
                    <li>More of a passion project, I learned the old 3D rendering software
                        POV-Ray to make old 90s styled 3D renders</li>
                    <li>Uses POV-Ray's scene description language.</li>
                    <li>Worked with some simple graphics components, like SORs, splines, and a bit of working with textures, lighting,
                        and camera placement</li>
                    <li>Made SOLO</li>
                </ul>
                <p class = "font-bold">Asteroid War Minecraft Map</p>
                <ul class="list-disc pl-6">
                    <li>Minecraft map where you take control of a spaceship's cannon,
                        shooting incoming asteroids and dealing with problems on the ship.</li>
                    <li> I worked on most of the building/design/many ideas, as well as making some
                        3D models, 2D sprites, and programming for some of the events that can happen.</li>
                    <li>Made for the Yeggs 2023 Fall MapJam, where we had only 3 days to complete it!</li>
                    <li>Won 3rd place prize! <a class = "tweet" href="https://x.com/YeggsStudios/status/1707034081102266798?s=20">[Place Announcement Tweet]</a></li>
                    <li> Made in collaboration</li>
                </ul>
                <p class ="font-bold">This Website</p>
                <ul class="list-disc pl-6">
                    <li> This website is also a personal project of mine! </li>
                    <li>I learned Svelte, TypeScript and Tailwind CSS in order to make it.</li>
                    <li>Hosted with GitHub sites</li>
                    <li>Made SOLO</li>
                </ul>
                <div class="flex items-center gap-2">
                    <a href="/fumo" ><img src="/image/reimu.PNG" class="fumo w-10 h-10 " alt="fumo"></a> <p class ="font-bold">FumoBot (WIP)</p>
                </div>
                <ul class="list-disc pl-6">
                    <li>Discord bot made with Java, using Discord4J </li>
                    <li>The bot has many functions, which include:</li>
                    <li>Checking the AmiAmi website for stock status of Touhou Fumo Plushes</li>
                    <li>Display all new item's in the day's Fortnite item shop with filters for different types of items</li>
                    <li>Guessing games based on Wordle that get random characters from the Fortnite shop or Brainrot wiki. Users can get hints,
                        make a guess (which shows any letters that were in the correct position) and get points based on how many guesses they used</li>
                    <li>Has a points system that gives players points from activities, and stores them so anyone can see their total. </li>
                    <li>Has some ways to spend points, including a gacha game implemented with rarities and pity, with a feature that levels up every duplicate pulled</li>
                    <li>Uses SQlite to store information about user's points and their collected gachas</li>
                    <li>Uses the last.fm API to implement a command that searches for a last.fm user's listening history, with parameters allowing to sort by
                        all time, month, year, week, and choose between songs and albums</li>
                    <li>Uses Jsoup, Gson and other Java libraries to implement webscraping commands (searching Brainrot wiki)</li>
                    <li>Uses the Fortnite API to get shop data</li>
                    <li>Uses the AmiAmi API in a python script to search AmiAmi website</li>
                    <li>Uses gradle to build, hosted on my Ubuntu Oracle Cloud server</li>
                    <li>Made SOLO</li>
                </ul>


        </div>
    {/if}
</MediaQuery>