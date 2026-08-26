<script lang="ts">
    import Tabs from "../../tabs.svelte";

</script>

<title>Scott's Site - Spam Email Detector</title>

<nav class="tabs flex tabe">
    <a href="/demos"><button class="button button2" type="button"> Go Back </button></a>
</nav>
<div class="test">

    <header> <h2>Spam Email Detector</h2> </header>
    <div class = "flex bg-[#004281] flex-grow flex-col overflow-y-scroll max-h-[733px] h-[733px] rounded-b-[13px] rounded-bl-[13px] pl-2">
        <h2  class="text-2xl font-bold mb-2 text-center" >Introduction</h2>
        <p>The Spam Email Detector was a class project with the purpose of taking an email as an input and
        determining whether or not it is a spam email. Details on this page will be taken from the
        report we wrote up for the project. </p>
        <p class="text-center">GitHub Repo: <a class="text-cyan-400 hover:text-red-400"href="https://github.com/scottm213/SpamDetector"> Spam Detector Github</a></p>
        <h2 class="text-2xl font-bold mb-2 text-center" >Functions</h2>
        <h2 class="text-2xl font-bold mb-2 "> - Spam Points</h2>
        <p>There are four main layers of defense in this program: hashed signature
            detection, hyperlink certificate analysis, unsubscribe presence analysis, and AI based detection. If any one of these layers detects spam, the email will be flagged
            as spam. However, some legitimate emails may not include an unsubscribe link, or
            the AI model may falsely flag an email as spam. In this case, the other layers of
            defense may detect the email as non-spam and slightly reduce the amount of spam
            points the email has gotten. At the end of the program's execution, the spam score
            will be shown. If it is less than 20, it is completely clear and not considered spam.
            A user of the program can then surmise the severity of the spam based on how high
            a score it was given.</p>
        <h2 class="text-2xl font-bold mb-2 "> - Signature-Based Detections</h2>
        <p class="italic">This feature was created by my partner.</p>
        <p>This part of the program essentially just takes precomputed hashes from a nearby
            file and compares it to the newly created hash of the email the program is currently
            processing to decide if it is spam or not. First, it takes the information in hashes.txt
            file to clean it up by removing unnecessary characters and spaces. Then it calls
            loadHashes in case it wasn’t done manually. After it receives the email provided, it
            hashes it and compares it to the ones found in hashDB and if it finds a match, it
            reports the email as spam.</p>
        <h2 class="text-2xl font-bold mb-2 "> - HTTPS Certificate Analysis</h2>
        <p>Emails may contain many hyperlinks to lead the user to the website of the
            company that sent it, but links in a spam email can also be malicious and contain
            things that will harm the receivers' PC. This function finds all https protocol links
            in an email by iterating through the file and matching a regex pattern that searches
            for substrings beginning with https:// and ending with characters like “, \s, &lt;, &gt;, or
            ‘). These characters tend to show the end of a URL in the downloaded email files.
            In order for this to work, the function ‘cleanContent’ is defined. This just uses a
            few regexes to clean the email of any encoding artifacts, which cause https links to
            break. Finally, the matcher which searches for URLS using the regex pattern also
            checks that the URL contains a domain extension. Some links, mostly local assets
            on the email, do not have extensions and are not helpful in determining spam. So,
            we have a set of common URL extensions to check for.</p>
        <br>
        <p>The function then uses the Java ‘HttpsURLConnection’ function to attempt a
            connection. If this connection fails, we get useful information depending on the
            exception it throws. If the error is a ‘SSLHandshakeException’, we know
            something is wrong with the webpage certificate; it is either invalid or expired. The
            second error is ‘UnknownHostException’. This exception will only be raised when
            the connection fails due to the webpage not existing. We track the
            ‘UnknownHostException’ mostly for edge cases, like when a spam email uses a
            link that has already been taken down.</p>
        <h2 class="text-2xl font-bold mb-2 "> - Unsubscribe Link Analysis</h2>
        <p>Initially, this function only checked the email for the presence of the word
            “unsubscribe”. This however proved to be unreliable in certain situations, as any
            spam email can just contain the word unsubscribe as part of the message or other
            wise. Since downloading an email usually includes all the header information, we
            can search for actual unsubscribe terms that lets email services like Gmail quickly
            find the unsubscribe link. If an email has these terms in the header: "listunsubscribe", "mailto:unsubscribe", "list-unsubscribe-post", it is much more likely
            that the unsubscribe link located in the email is legitimate.</p>
        <h2 class="text-2xl font-bold mb-2 "> - AI-Powered Detection</h2>
        <p>The AI-powered detection function was not part of the requirements for this
            project but was added instead as a bonus to improve the detection rate. While all
            other features combined rather successfully found spam emails, the AI-powered
            detection function helps boost this detection rate and provides a rather strong
            accuracy rating. This detection function uses OpenAI’s Chat Completion API,
            which allows a program to send an input to an AI model with specific instructions.</p>



    </div>


</div>
