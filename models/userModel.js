export const insert = async (user) => {
    const [result] = await pool.query(
        "INSERT INTO user(name, author) VALUES (?, ?, ?)",
        [user.name, user.email, user.password]
    );
}
export const findUserByEmail = async (email) => {
    const [rows] = await pool.query("SELECT * FROM user WHERE email = ?",
        [email]
    );
    return rows;
}
