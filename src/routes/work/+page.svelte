<script lang="ts">
    import Tabs from "../tabs.svelte";

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

<div class ="test"> </div>
<Tabs />
<header> <h2>My Work</h2> </header>
<div class = "flex flex-row">
    <div class = "square flex flex-col items-start justify-start">
        <div class="grid grid-cols-4 gap-1 ">

            <button  class = "flex shrink-1 flex-col w-33.5 h-10 {buttonStyle1} rounded-tl-lg rounded-br-lg mt-20 col-start-3 col-end-4" type="button" value="school" onclick={schoolButtonClicked}>School Projects</button>


            <button class = "flex shrink-1 flex-col w-33.5 h-10 {buttonStyle2} rounded-tl-lg rounded-br-lg hover:bg-[#004381] mt-50 col-start-3 col-end-4" type="button" value="personal "onclick={personalButtonClicked}>Personal Projects</button>
        </div>
    </div>
        <div>
            <br>
            <br>
            <br>
            {#if schoolWorkOpen}

                <div class = "workSquare overflow-y-scroll flex flex-col">
                    <h1 class ="font-bold">School Projects</h1>
                    <p class = "font-bold">Galaga Clone</p>
                    <p>- Made using Java, Java FX <br>
                    - Plays similar to Space Invaders <br>
                    - Made with a team</p>
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
                    <p>- A research paper describing different plugins to assist with <br>
                    reverse engineering and static malware analysis. <br>
                    - Made with a team</p>

                </div>
            {/if}

            {#if personalWorkOpen}
                <div class = "workSquare overflow-y-scroll flex flex-col">
                    <h1 class = "font-bold">Personal Projects</h1>
                    <p class = "font-bold">SleepZone (in progress)</p>
                    <p>- Made using Swift, SwiftUI<br>
                        - Simple iOS app for tracking and recording the amount of hours you sleep <br>
                        - Uses SwiftData for persistent data tracking <br>
                        - Made in collaboration</p>
                    <p class = "font-bold">POV-Ray Projects </p>
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
                        <a href="/fumo" ><img src="/image/reimu.PNG" class="w-10 h-10 border-2 border-transparent hover:border-white transition" alt="fumo"></a> <p class ="font-bold">FumoBot (WIP)</p>
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