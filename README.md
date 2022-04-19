# Coding exercise
This node application pulls asteroid data from NASA's api.

It returns the names of asteroids that came within 9,000,000 km of earth between Jan 1, 2019 - Jan 7, 2019

# Install
Once copied to your local system, navigate to the folder in your terminal.
   ```sh
   npm install
   ```

Create your own .env file in the project directory containing your NASA api key like so:
```sh
PORT={API port}
```

OR

Replace the url in index.ts with:
```sh
https://www.neowsapp.com/rest/v1/feed?start_date=2019-01-01&end_date=2019-01-07&detailed=false&api_key=DEMO_KEY
```

Finally, run the program with node.
   ```sh
   node .
   
   or
   
   node index.ts
   ```
