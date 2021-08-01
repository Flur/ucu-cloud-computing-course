module.exports = async function (context, req) {
    try {
        context.log('JavaScript HTTP trigger function processed a request.');

        context.log(`*** HTTPExample body: ${req.body}`);


        // fail if incoming data is required
        if (!req.body) {

            context.res = {
                status: 400
            };
            return;
        }


        return {
            res: {
                body: req.body, 
                contentType: 'application/json'
            },
            outputBlob: req.body
        }
    } catch(err) {
        context.log(`*** HTTPExample name: ${req.query}`);

        context.res = {
            status: 500
        };
    }
}