import {z} from 'zod'

export const JobFormSchema = z.object({
    firstName : z.string().min(1 , {
        message : "firstName must contain atleast 1 characters"
    }).max(20 , {
        message : "firstName can't have more than 10 characters"
    }).regex(/^[A-Za-z]+$/, {
        message: "lastName must contain only alphabetic characters"
      }),
    lastName : z.string().min(1 , {
        message : "lastName must contain atleast 1 characters"
    }).max(20 , {
        message : "lastName can't have more than 10 characters"
    }).regex(/^[A-Za-z]+$/, {
        message: "lastName must contain only alphabetic characters"
      }),

    email : z.string().email(),
    Country: z.string({
        required_error: "Please select a country.",
      }),

})