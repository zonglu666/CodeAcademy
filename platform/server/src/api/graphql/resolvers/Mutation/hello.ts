type Args = {
  name: string;
}
const hello = (parent: any, args: Args, context: any, info: any) => {
  return args.name + ", Hello World!";
};

export default hello;
