import * as z  from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Too short! Name should be at least two characters'}),
    username: z.string().min(2, { message: 'Too short! Username should be at least two characters'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be at least 8 characters strong'}),
    
})

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be at least 8 characters strong'}),
    
})

export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
})
  
  