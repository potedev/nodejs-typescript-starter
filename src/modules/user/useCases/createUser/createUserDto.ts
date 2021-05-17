import { MinLength, MaxLength, IsString, IsDefined, IsEmail, IsOptional, validate } from 'class-validator'
import { parseError } from '../../../../utils/parseClassValidatorError'
import { AbstractDto } from '../../../../common/abstractDto'

export interface IRequestCreateUserDto {
    firstname?: string;
    lastname?: string;
    username: string;
    email: string;
    password: string;
}

export class RequestCreateUserDto extends AbstractDto implements IRequestCreateUserDto {
    //-------------FIELD-------------
    @IsOptional()
    @IsString()
    public firstname?: string

    //-------------FIELD-------------
    @IsOptional()
    @IsString()
    public lastname?: string

    //-------------FIELD-------------
    @MinLength(3, {
        message: 'Username is too short',
    })
    @MaxLength(20, {
        message: 'Username is too long',
    })
    @IsDefined({ message: 'Username is required' })
    @IsString()
    public username: string

    //-------------FIELD-------------
    @IsEmail()
    @IsDefined({ message: 'Email is required' })
    public email: string

    //-------------FIELD-------------
    @IsDefined({ message: 'Password is required' })
    @IsString()
    public password: string

    constructor(props: IRequestCreateUserDto) {
        super();

        const { firstname, lastname, username, email, password } = props;

        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}