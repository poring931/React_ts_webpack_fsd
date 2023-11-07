export type TBuildMode = 'development' | 'production';
export type TBuildPaths = {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface IBuildOptions {
    mode: TBuildMode;
    paths: TBuildPaths;
    isDev: boolean;
    port: number;
}

export interface IBuildEnv {
    mode: TBuildMode;
    port: number
}