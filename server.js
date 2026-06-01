var slugify=require('slugify')

const a=slugify('some string')
console.log(a)

const b=slugify('some-string','_')
console.log(b)
