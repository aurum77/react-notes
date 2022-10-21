class CustomError extends Error {
  message!: string;
  status?: number = 500;

  constructor(message: string, status: number) {
    super(message)
    this.status = status;
  }
}

export default CustomError;
