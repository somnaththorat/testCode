import { ObjectId } from 'bson';
export const handleReq = async(req, res, next)=>{
    console.log('inside middleware');
    const {id, phoneNumber}= req.query;
        const query = {}
        if(id){
            query._id = new ObjectId(id)
        }
        if (phoneNumber) {
            query.phoneNumber = phoneNumber;
        }
        req.query1 = query

        next();
}