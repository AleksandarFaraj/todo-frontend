# Todo Frontend 

To get started you need to run first install the dependencies

    npm install


Second step is add environment variables:
    
    move '.\rename for testing.env' .env

For OSX/Unix:
    
    mv "./rename for testing.env" .env

Finally to test: 

    npm run dev

To run in production (in a real setting will as static files on a CDN, so only distribute ./out):
    
    npm run build
    npm run start
