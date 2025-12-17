import { Container, Paper, Typography } from "@mui/material"
import TodoFeature from "../features/todo/TodoFeature";

const TodoPage = () => {
    return (
        <Container maxWidth="md">
            <Paper elevation={3} style={{ padding: '10px' }}>
                <Typography variant="h4" gutterBottom align="center">
                    📝 Мои задачи
                </Typography>

                {/* Весь функционал задач в одном компоненте */}
                <TodoFeature />
            </Paper>
        </Container>
    );
};

export default TodoPage;