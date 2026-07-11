const { createClient } = require('@supabase/supabase-js')

// Initialize Supabase Admin Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("❌ Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function setPassword(email, newPassword) {
  if (!email || !newPassword) {
    console.log("Usage: node set-password.js <email> <newPassword>")
    process.exit(1)
  }

  console.log(`🔍 Looking for user with email: ${email}...`)

  // 1. Fetch user by email via admin API
  const { data: usersData, error: listError } = await supabase.auth.admin.listUsers()
  
  if (listError) {
    console.error("❌ Error fetching users:", listError.message)
    return
  }

  const user = usersData.users.find(u => u.email.toLowerCase() === email.toLowerCase())

  if (!user) {
    console.error(`❌ Could not find a user with the email: ${email}`)
    return
  }

  console.log(`✅ Found user: ${user.id}`)
  console.log(`🔑 Updating password...`)

  // 2. Force update the password
  const { data, error: updateError } = await supabase.auth.admin.updateUserById(
    user.id,
    { 
      password: newPassword,
      email_confirm: true // Just in case their email wasn't confirmed
    }
  )

  if (updateError) {
    console.error("❌ Failed to update password:", updateError.message)
  } else {
    console.log(`🎉 Success! The password for ${email} has been updated.`)
    console.log(`They can now log in at: ${process.env.NEXT_PUBLIC_APP_URL}/login`)
  }
}

// Run script with arguments from terminal
const args = process.argv.slice(2)
setPassword(args[0], args[1])
