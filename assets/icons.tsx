
import Svg, { G, Path } from 'react-native-svg'

export const Homeicon = ({width, height, color}: any) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill={color}
        >
            <G>
                <Path
                    d='M21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8947 20.2652 21 20 21H4C3.73478 21 3.48043 20.8947 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V9.49003C2.99989 9.33764 3.03462 9.18724 3.10152 9.05033C3.16841 8.91341 3.26572 8.79359 3.386 8.70003L11.386 2.47803C11.5615 2.34147 11.7776 2.26733 12 2.26733C12.2224 2.26733 12.4385 2.34147 12.614 2.47803L20.614 8.70003C20.7343 8.79359 20.8316 8.91341 20.8985 9.05033C20.9654 9.18724 21.0001 9.33764 21 9.49003V20V20ZM19 19V9.97803L12 4.53403L5 9.97803V19H19Z'
                    fill={color}
                />
            </G>
        </Svg>
    )
}
export const Scanicon = ({width, height, color}: any) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill={color}
        >
            <G>
                <Path
                    d='M15 3H21V8H19V5H15V3ZM9 3V5H5V8H3V3H9ZM15 21V19H19V16H21V21H15ZM9 21H3V16H5V19H9V21ZM3 11H21V13H3V11Z'
                    fill={color}
                />
            </G>
        </Svg>
    )
}

export const Ordericon = ({width, height, color}: any) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill={color}
        >
            <G>
                <Path
                    d='M4 16V4H2V2H5C5.26522 2 5.51957 2.10536 5.70711 2.29289C5.89464 2.48043 6 2.73478 6 3V15H18.438L20.438 7H8V5H21.72C21.872 5 22.022 5.03466 22.1586 5.10134C22.2952 5.16801 22.4148 5.26495 22.5083 5.38479C22.6019 5.50462 22.6668 5.6442 22.6983 5.79291C22.7298 5.94162 22.7269 6.09555 22.69 6.243L20.19 16.243C20.1358 16.4592 20.011 16.6512 19.8352 16.7883C19.6595 16.9255 19.4429 17 19.22 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16ZM6 23C5.46957 23 4.96086 22.7893 4.58579 22.4142C4.21071 22.0391 4 21.5304 4 21C4 20.4696 4.21071 19.9609 4.58579 19.5858C4.96086 19.2107 5.46957 19 6 19C6.53043 19 7.03914 19.2107 7.41421 19.5858C7.78929 19.9609 8 20.4696 8 21C8 21.5304 7.78929 22.0391 7.41421 22.4142C7.03914 22.7893 6.53043 23 6 23ZM18 23C17.4696 23 16.9609 22.7893 16.5858 22.4142C16.2107 22.0391 16 21.5304 16 21C16 20.4696 16.2107 19.9609 16.5858 19.5858C16.9609 19.2107 17.4696 19 18 19C18.5304 19 19.0391 19.2107 19.4142 19.5858C19.7893 19.9609 20 20.4696 20 21C20 21.5304 19.7893 22.0391 19.4142 22.4142C19.0391 22.7893 18.5304 23 18 23Z'
                    fill={color}
                />
            </G>
        </Svg>
    )
}

export const Profileicon = ({width, height, color}: any) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill={color}
        >
            <G>
                <Path
                    d='M4 22C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14C14.1217 14 16.1566 14.8429 17.6569 16.3431C19.1571 17.8434 20 19.8783 20 22H18C18 20.4087 17.3679 18.8826 16.2426 17.7574C15.1174 16.6321 13.5913 16 12 16C10.4087 16 8.88258 16.6321 7.75736 17.7574C6.63214 18.8826 6 20.4087 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z'
                    fill={color}
                />
            </G>
        </Svg>
    )
}

export const Bagicon = ({width, height, color}: any) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox='0 0 20 20'
        >
            <G>
                <Path
                    d='M5 6.25391H15.6367V15.5997C15.6367 16.7043 14.7413 17.5997 13.6367 17.5997H7C5.89543 17.5997 5 16.7043 5 15.5997V6.25391Z'
                    stroke={color}
                    strokeWidth={2}
                />
                <Path
                    d='M7.12744 5.19101C7.12744 3.42866 8.55611 2 10.3185 2V2C12.0808 2 13.5095 3.42866 13.5095 5.19101V6.25468H7.12744V5.19101Z'
                    stroke={color}
                    strokeWidth={2}
                />
            </G>
        </Svg>
    )
}