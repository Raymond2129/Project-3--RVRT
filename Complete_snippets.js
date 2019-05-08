



// this will grab the link for specific town
db.data.select(`link`)
    .where("town").eq("Ouray")
    .sort(`type`)
    .limit(100)
