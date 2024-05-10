# innerbless-be-mail
in this NodeJS app there is a single endpoint for send email to the receiver address which provided in request body
as mail host there is a temporary mail address has added.

check .env file

when user receive an email user will see this email address as sender of the email.
Current email host : "yourseatsrilanka@gmail.com"

If you need you have to get a 2-factor authenticated email address owned by you and need to do some configurations to add an email address like this.

# YOU NEED TO CREATE APP PASSWORD FOR YOU GMAIL ADDRESS. ITS A BIT DIFFERENT 
follow this : https://support.google.com/mail/thread/205453566/how-to-generate-an-app-password?hl=en

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

# steps for Run this APP

# Clone this from git repository
git clone https://github.com/KajaliniPuvanenthiran/innerbless-be-mail

# navigate to appdirectory
cd innerbless-be-mail

# Install dependencies using vs code terminal
npm install

# Run application 
node index.js