import { toNano } from '@ton/core';
import { NetworkProvider } from '@ton/blueprint';
import { getMasterContract } from './deploy';

export async function run(provider: NetworkProvider): Promise<void> {
    const contract = await getMasterContract(provider);

    await contract.send(
        provider.sender(),
        {
            value: toNano("1"),
            bounce: false,
        },
        {
            $$type: "MintJettonSample",
            queryId: BigInt(Math.floor(Date.now() / 1000)),
            amount: toNano("1.3")
        }
    );
}
