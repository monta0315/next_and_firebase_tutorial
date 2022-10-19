import db from '../../../utils/db'

export default async (req,res) => {
    try {
        const {slug} = req.body
        const entries = await db.collection('entries').get()
        const entriesData = entries.docs.map(entry => entry.data())
    }
}