import serialize from 'serialize-javascript'



export const render = (res,store,content) => {
        res.send(`
        <html>
           <head>
               <title>
                   SSR
               </title>
               <meta name="keywords" content="SSR Demo">
               <meta name="description" content="SSR">
           </head>
           <body>
               <div id="root">${content}</div>
               <script type="application/json" id="SSR_HYDRATED_DATA">${serialize(store.getState())}</script>
               <script src="./index.js"></script>
           </body>
       </html>`
    )
 
   
}