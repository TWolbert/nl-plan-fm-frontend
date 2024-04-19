interface ActionResponse<T> {
    success: boolean;
    error: string | null,
    data: T | null;
}